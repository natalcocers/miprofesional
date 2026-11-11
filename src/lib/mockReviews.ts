// Reseñas de ejemplo para los profesionales de mockProviders.ts (pedido
// de Natalia — sin depender de Supabase, ver src/hooks/useReviews.ts).
import type { Review } from "@/types/database";

function review(id: string, providerId: string, rating: number, tags: string[], comment: string): Review {
  return {
    id,
    service_request_id: `mock-request-${id}`,
    reviewer_id: `mock-reviewer-${id}`,
    provider_id: providerId,
    rating,
    quick_tags: tags,
    comment,
    created_at: ""
  };
}

export const mockReviews: Review[] = [
  review("r1", "mock-plomeria", 5, ["Puntual", "Prolijo"], "Vino rápido y solucionó la pérdida en media hora. Re recomendable."),
  review("r2", "mock-plomeria", 5, ["Precio justo"], "Buen trabajo y precio justo, volvería a llamarlo."),

  review("r3", "mock-electricidad", 5, ["Prolijo", "Buena comunicación"], "Dejó todo prolijo y me explicó cada paso."),
  review("r4", "mock-electricidad", 4, ["Puntual"], "Llegó en hora y resolvió el problema del tablero."),

  review("r5", "mock-carpintero-2", 5, ["Prolijo"], "Me hizo un mueble a medida, quedó excelente."),
  review("r6", "mock-carpintero-2", 4, ["Precio justo", "Puntual"], "Cumplió con los tiempos y el presupuesto acordado."),

  review("r7", "mock-cerrajeria", 5, ["Puntual"], "Abrió la puerta en minutos, muy rápido."),
  review("r8", "mock-cerrajeria", 4, ["Buena comunicación"], "Me avisó todo por WhatsApp antes de llegar."),

  review("r9", "mock-pintura", 5, ["Prolijo"], "Pintó el living y quedó impecable, muy prolijo con los bordes."),
  review("r10", "mock-pintura", 4, ["Precio justo"], "Buen precio para el trabajo que hizo."),

  review("r11", "mock-carpinteria", 5, ["Prolijo", "Puntual"], "Restauró una mesa antigua, trabajo espectacular."),
  review("r12", "mock-carpinteria", 5, ["Buena comunicación"], "Muy atenta a los detalles que le pedí."),

  review("r13", "mock-limpieza", 5, ["Puntual", "Prolijo"], "Dejó el departamento impecable, súper recomendable."),
  review("r14", "mock-limpieza", 4, ["Precio justo"], "Buen servicio y precio accesible."),

  review("r15", "mock-jardinero", 4, ["Puntual"], "Podó todo el jardín en una mañana, quedó muy prolijo."),
  review("r16", "mock-jardinero", 5, ["Buena comunicación"], "Me asesoró sobre qué plantas poner, excelente."),

  review("r17", "mock-piletero", 5, ["Prolijo"], "Dejó la pileta cristalina para el verano."),
  review("r18", "mock-piletero", 4, ["Puntual", "Precio justo"], "Vino a la hora acordada y cobró lo justo."),

  review("r19", "mock-tecnico", 5, ["Prolijo", "Buena comunicación"], "Reparó el lavarropas y me explicó qué había pasado."),
  review("r20", "mock-tecnico", 5, ["Precio justo"], "Precio justo y solucionó todo en una visita.")
];
