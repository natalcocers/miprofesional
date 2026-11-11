import { useState } from "react";
import { TabBar } from "@/components/layout/TabBar";
import { ProviderCard } from "@/components/ui/ProviderCard";
import { Icon } from "@/components/ui/Icon";
import { useSearchProviders } from "@/hooks/useProviders";

// Tab "Buscar" del home cliente (ícono de lupa en la barra inferior,
// docs/promatch_home_cliente_mockup.html) — búsqueda libre por nombre de
// profesional entre los ya aprobados.
export default function Search() {
  const [query, setQuery] = useState("");
  const { data: results, isLoading } = useSearchProviders(query);

  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark px-6 pb-24 pt-10">
      <div className="flex items-center gap-2 rounded-pill border-2 border-navy/15 dark:border-cream/15 bg-cream dark:bg-navy-dark px-4 py-2.5">
        <Icon name="search" className="text-navy dark:text-cream" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar un profesional por nombre"
          className="flex-1 bg-transparent font-tech text-sm text-navy dark:text-cream placeholder:text-navy/40 dark:placeholder:text-cream/40 focus:outline-none"
        />
      </div>

      <div className="mt-4 space-y-2">
        {query.trim().length <= 1 && (
          <p className="text-center font-tech text-sm text-navy/40 dark:text-cream/40">Escribí al menos 2 letras para buscar.</p>
        )}
        {isLoading && <p className="font-tech text-sm text-navy/40 dark:text-cream/40">Buscando...</p>}
        {!isLoading && query.trim().length > 1 && !results?.length && (
          <p className="text-center font-tech text-sm text-navy/40 dark:text-cream/40">No encontramos profesionales con ese nombre.</p>
        )}
        {!!results?.length && (
          <div className="grid grid-cols-2 gap-3">
            {results.map((p) => (
              <ProviderCard key={p.profile_id} provider={p} />
            ))}
          </div>
        )}
      </div>

      <TabBar mode="client" />
    </div>
  );
}
