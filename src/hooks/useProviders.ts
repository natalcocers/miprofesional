import { useQuery } from "@tanstack/react-query";
import { mockProviders } from "@/lib/mockProviders";
import type { ProviderListItem } from "@/types/database";

// Listado filtrado por especialidad (mapa de UX 2.3). Usa datos de ejemplo
// en vez de Supabase (pedido de Natalia — ver src/lib/mockProviders.ts).
export function useProviders(specialty: string) {
  return useQuery({
    queryKey: ["providers", specialty],
    queryFn: async (): Promise<ProviderListItem[]> => {
      return mockProviders.filter((p) => p.specialties.includes(specialty));
    }
  });
}

// "Cerca tuyo ahora" del home cliente (mapa de UX 2.1) — disponibles
// primero, cualquier especialidad.
export function useNearbyProviders(limit = 4) {
  return useQuery({
    queryKey: ["providers", "nearby", limit],
    queryFn: async (): Promise<ProviderListItem[]> => {
      return [...mockProviders]
        .sort((a, b) => Number(b.available_now) - Number(a.available_now))
        .slice(0, limit);
    }
  });
}

// Sin esto, buscar "martin" no encuentra "Martín": ilike de Postgres es
// case-insensitive pero no ignora acentos, y la mayoría escribe sin tilde.
// Se normaliza en el cliente en vez de en la query para no depender de la
// extensión unaccent en la base.
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Tab "Buscar" (mapa de UX 2.1, ícono de lupa en la barra de navegación
// inferior): busca por nombre del profesional entre los ya aprobados.
export function useSearchProviders(query: string) {
  return useQuery({
    queryKey: ["providers", "search", query],
    enabled: query.trim().length > 1,
    queryFn: async (): Promise<ProviderListItem[]> => {
      const needle = normalize(query);
      return mockProviders.filter((p) => normalize(p.profile.full_name).includes(needle));
    }
  });
}

export function useProvider(profileId: string | undefined) {
  return useQuery({
    queryKey: ["provider", profileId],
    enabled: !!profileId,
    queryFn: async (): Promise<ProviderListItem | null> => {
      return mockProviders.find((p) => p.profile_id === profileId) ?? null;
    }
  });
}
