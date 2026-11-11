import { useQuery } from "@tanstack/react-query";
import { mockGallery } from "@/lib/mockGallery";
import type { ProviderGalleryItem } from "@/types/database";

// Galería de trabajos realizados (perfil del profesional y perfil
// editable del prestador, mapa de UX 2.4 y 3.3). Datos de ejemplo en vez
// de Supabase (pedido de Natalia — ver src/lib/mockGallery.ts).
export function useProviderGallery(profileId: string | undefined) {
  return useQuery({
    queryKey: ["gallery", profileId],
    enabled: !!profileId,
    queryFn: async (): Promise<ProviderGalleryItem[]> => {
      return mockGallery.filter((g) => g.profile_id === profileId);
    }
  });
}
