import { Link } from "react-router-dom";
import { TabBar } from "@/components/layout/TabBar";
import { Icon } from "@/components/ui/Icon";
import { ProviderCard } from "@/components/ui/ProviderCard";
import { NotificationBell } from "@/components/ui/NotificationBell";
import { RoleSwitch } from "@/components/ui/RoleSwitch";
import { useAuth } from "@/context/AuthContext";
import { useNearbyProviders } from "@/hooks/useProviders";
import { categories } from "@/lib/catalog";

export default function ClientHome() {
  const { profile } = useAuth();
  const { data: nearby, isLoading } = useNearbyProviders();
  const firstName = profile?.full_name?.split(" ")[0] ?? "";
  // Única categoría (Hogar) — la tarjeta de categoría ya no tiene sentido
  // acá, se muestran directo sus oficios (pedido de Natalia).
  const [hogar] = categories;
  const oficios = hogar?.specialties ?? [];

  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark pb-24">
      <header className="flex items-start justify-between px-6 pt-10">
        <div>
          <p className="font-logo text-3xl font-normal text-navy dark:text-cream">hola, {firstName}</p>
          {profile?.location_label ? (
            <p className="mt-0.5 flex items-center gap-1 font-tech text-xs text-navy/50 dark:text-cream/50">
              <Icon name="map-pin" className="text-xs" />
              {profile.location_label}
            </p>
          ) : (
            <Link to="/perfil" className="mt-0.5 block font-tech text-xs text-accent underline">
              Agregá tu ubicación
            </Link>
          )}
          {profile?.is_provider_active && (
            <div className="mt-2">
              <RoleSwitch active="client" />
            </div>
          )}
        </div>
        <NotificationBell />
      </header>

      <div className="px-6 pt-4">
        <Link
          to="/categoria/hogar"
          className="flex items-center gap-2 rounded-pill border-2 border-navy/15 dark:border-cream/15 bg-cream dark:bg-navy-dark px-4 py-2.5"
        >
          <Icon name="search" className="text-navy dark:text-cream" />
          <span className="font-tech text-sm text-navy/40 dark:text-cream/40">¿Qué necesitás resolver hoy?</span>
        </Link>
      </div>

      <section className="px-6 pt-6">
        <p className="mb-2 font-rounded text-sm font-bold text-navy dark:text-cream">Categorías</p>
        <div className="grid grid-cols-2 gap-3">
          {oficios.map((sp) => (
            <Link key={sp.id} to={`/categoria/${hogar.id}/${sp.id}`}>
              <div className="flex items-center gap-2 rounded-pill bg-accent px-4 py-3.5 hover:brightness-110">
                <Icon name={sp.icon} className="text-xl text-cream" />
                <span className="flex-1 text-center font-caption text-base font-bold text-cream">{sp.label}</span>
                <span className="w-5 shrink-0" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pt-6">
        <p className="mb-2 font-logo text-xl font-normal text-navy dark:text-cream">cerca tuyo ahora</p>

        {isLoading && <p className="font-tech text-sm text-navy/40 dark:text-cream/40">Buscando profesionales...</p>}
        {!isLoading && !nearby?.length && (
          <p className="font-tech text-sm text-navy/50 dark:text-cream/50">Todavía no hay profesionales aprobados.</p>
        )}

        <div className="grid grid-cols-2 gap-3">
          {nearby?.map((p) => (
            <ProviderCard key={p.profile_id} provider={p} />
          ))}
        </div>
      </section>

      <TabBar mode="client" />
    </div>
  );
}
