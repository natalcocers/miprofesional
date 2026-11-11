// Catálogo único de categorías y especialidades — fuente de verdad para
// Home, Category, Listing, Contact y RequestDetail. Evita repetir la
// misma lista (y que se desincronicen) en cada pantalla. "enabled" marca
// qué recorte ya tiene profesionales reales cargados (mapa de UX 2.1/2.2).

export interface Specialty {
  id: string;
  label: string;
  icon: string;
  enabled: boolean;
  // Chips de motivo específicos de la especialidad, para el formulario de
  // contacto (mapa de UX 2.5, docs/promatch_formulario_chips_plomeria.html).
  reasonChips: string[];
}

export type CategoryAccent = "green" | "blue" | "orange";

export interface Category {
  id: string;
  label: string;
  // Título largo + bajada para la grilla de categorías del home (rediseño
  // pedido por Natalia con referencia visual: tarjeta navy, ícono, título
  // de dos líneas y bajada corta). "label" sigue siendo la forma corta
  // usada en breadcrumbs (BackHeader, Contact, RequestDetail) — no la
  // reemplaza, así no hay que acortar el título en esos lugares.
  title: string;
  tagline: string;
  icon: string;
  // Color de acento decorativo de la tarjeta (anillo + botón circular).
  // "green" usa el verde LIMA decorativo (#89dd7f), nunca el verde
  // funcional (#56c689) — ese queda exclusivo de "Verificado"/"Disponible
  // ahora" (brand-brief). Rota entre las 3 tonalidades de la marca que
  // pueden usarse como acento genérico.
  accent: CategoryAccent;
  enabled: boolean;
  specialties: Specialty[];
}

export const categories: Category[] = [
  {
    id: "hogar",
    label: "Hogar",
    title: "Hogar y Mantenimiento",
    tagline: "Tu casa, en buenas manos.",
    icon: "home-2",
    accent: "green",
    enabled: true,
    specialties: [
      {
        id: "plomeria",
        label: "Plomería",
        icon: "droplet",
        enabled: true,
        reasonChips: ["Pérdida de agua", "Destape de cañería", "Instalación de sanitarios", "Reparación de canilla", "Calefón"]
      },
      {
        id: "electricidad",
        label: "Electricidad",
        icon: "bolt",
        enabled: true,
        reasonChips: ["Cortocircuito", "Instalación de tablero", "Colocación de artefactos"]
      },
      {
        id: "gas",
        label: "Gas",
        icon: "flame",
        enabled: true,
        reasonChips: ["Pérdida de gas", "Instalación de gas natural", "Certificación de instalación"]
      },
      {
        id: "cerrajeria",
        label: "Cerrajería",
        icon: "key",
        enabled: true,
        reasonChips: ["Apertura de puerta", "Cambio de cerradura", "Duplicado de llaves"]
      },
      {
        id: "pintura",
        label: "Pintura",
        icon: "brush",
        enabled: true,
        reasonChips: ["Pintura de interiores", "Pintura de exteriores", "Impermeabilización"]
      },
      {
        id: "carpinteria",
        label: "Carpintería",
        icon: "hammer",
        enabled: true,
        reasonChips: ["Muebles a medida", "Reparación de puertas y ventanas", "Armado de muebles"]
      },
      {
        id: "limpieza",
        label: "Limpieza",
        icon: "vacuum-cleaner",
        enabled: true,
        reasonChips: ["Limpieza profunda", "Limpieza de fin de obra", "Limpieza semanal"]
      },
      {
        id: "jardinero",
        label: "Jardinero",
        icon: "plant",
        enabled: true,
        reasonChips: ["Mantenimiento de jardín", "Poda", "Diseño de espacios verdes", "Armado de huerta"]
      },
      {
        id: "piletero",
        label: "Piletero",
        icon: "pool",
        enabled: true,
        reasonChips: ["Mantenimiento de pileta", "Limpieza de pileta", "Reparación de bomba", "Apertura/cierre de temporada"]
      },
      {
        id: "tecnico",
        label: "Técnico",
        icon: "tools",
        enabled: true,
        reasonChips: ["Reparación de electrodomésticos", "Instalación de electrodomésticos", "Mantenimiento general"]
      }
    ]
  }
];

const specialtyIndex = new Map<string, { specialty: Specialty; category: Category }>();
for (const category of categories) {
  for (const specialty of category.specialties) {
    specialtyIndex.set(specialty.id, { specialty, category });
  }
}

export function getSpecialty(specialtyId: string | undefined) {
  if (!specialtyId) return undefined;
  return specialtyIndex.get(specialtyId);
}

export function specialtyLabel(specialtyId: string | undefined) {
  return getSpecialty(specialtyId)?.specialty.label ?? specialtyId ?? "";
}

export function categoryLabel(specialtyId: string | undefined) {
  return getSpecialty(specialtyId)?.category.label ?? "";
}
