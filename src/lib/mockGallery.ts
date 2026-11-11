// Fotos de "Trabajos realizados" de ejemplo (pedido de Natalia — sin
// depender de Supabase, ver src/hooks/useGallery.ts).
import type { ProviderGalleryItem } from "@/types/database";

export const mockGallery: ProviderGalleryItem[] = [
  {
    id: "g1",
    profile_id: "mock-carpintero-2",
    image_url: "/gallery/carpinterofotoabajo.png",
    created_at: ""
  },
  {
    id: "g2",
    profile_id: "mock-cerrajeria",
    image_url: "/gallery/cerrajeraabajo.webp",
    created_at: ""
  },
  {
    id: "g3",
    profile_id: "mock-carpinteria",
    image_url: "/gallery/carpinteria-abajo-1.webp",
    created_at: ""
  },
  {
    id: "g4",
    profile_id: "mock-carpinteria",
    image_url: "/gallery/carpinteria-abajo-2.webp",
    created_at: ""
  }
];
