import { Link } from "react-router-dom";
import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import { specialtyLabel } from "@/lib/catalog";
import type { ProviderListItem } from "@/types/database";

// Tarjeta cuadrada de profesional (pedido de Natalia: foto grande arriba,
// nombre abajo, en grilla de 2 columnas) — reemplaza a la tarjeta
// horizontal anterior en las 4 pantallas donde aparecen profesionales
// (Home, Listing, Search, Favorites).
export function ProviderCard({ provider }: { provider: ProviderListItem }) {
  return (
    <Link to={`/profesional/${provider.profile_id}`}>
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-navy/15 dark:border-cream/15 bg-cream dark:bg-navy-dark p-4">
        <Avatar name={provider.profile.full_name} src={provider.profile.avatar_url} size="xl" />
        <div className="text-center">
          <p className="font-caption text-base font-bold text-navy dark:text-cream">{provider.profile.full_name}</p>
          <p className="font-caption text-xs text-navy/50 dark:text-cream/50">{specialtyLabel(provider.specialties[0])}</p>
          {provider.rating_avg !== null && (
            <p className="mt-0.5 flex items-center justify-center gap-0.5 font-tech text-xs text-amber-700">
              {provider.rating_avg.toFixed(1)} <Icon name="star" /> ({provider.rating_count ?? 0})
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
