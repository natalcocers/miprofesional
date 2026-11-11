import { Link, useNavigate } from "react-router-dom";
import { TabBar } from "@/components/layout/TabBar";
import { ProviderCard } from "@/components/ui/ProviderCard";
import { useAuth } from "@/context/AuthContext";
import { useFavorites } from "@/hooks/useFavorites";

// Favoritos del cliente (mapa de UX sección 7, docs/promatch_favoritos_mockup.html).
export default function Favorites() {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { data: favorites, isLoading } = useFavorites(profile?.id);

  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark px-6 pb-24 pt-10">
      <h1 className="font-logo text-3xl font-normal text-navy dark:text-cream">favoritos</h1>
      <p className="mb-4 font-tech text-xs text-navy/50 dark:text-cream/50">Tus profesionales de confianza</p>

      {isLoading && <p className="font-tech text-sm text-navy/50 dark:text-cream/50">Cargando...</p>}

      <div className="grid grid-cols-2 gap-3">
        {favorites?.map((p) => (
          <div key={p.profile_id}>
            <ProviderCard provider={p} />
            <button
              onClick={() => navigate(`/profesional/${p.profile_id}/contacto`)}
              className="mt-1 block w-full text-center font-tech text-xs text-accent"
            >
              Contactar directo →
            </button>
          </div>
        ))}
      </div>

      {!isLoading && !favorites?.length && (
        <>
          <div className="my-4 h-px bg-navy/10 dark:bg-cream/10" />
          <p className="mb-2 text-center font-tech text-xs text-navy/50 dark:text-cream/50">¿Buscás algo nuevo?</p>
          <Link
            to="/"
            className="block rounded-xl border-2 border-dashed border-navy/30 dark:border-cream/30 bg-cream dark:bg-navy-dark py-3 text-center font-tech text-sm text-navy/50 dark:text-cream/50"
          >
            Explorar categorías
          </Link>
        </>
      )}

      <TabBar mode="client" />
    </div>
  );
}
