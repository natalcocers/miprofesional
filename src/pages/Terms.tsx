import { BackHeader } from "@/components/layout/BackHeader";

const sections = [
  {
    title: "1. Qué es Mi Profesional",
    body: "Mi Profesional es una aplicación que conecta a personas que necesitan resolver un problema en su hogar con profesionales independientes. Funciona en la Ciudad Autónoma de Buenos Aires. Mi Profesional es una plataforma intermediaria. No presta los servicios y no es empleadora de los profesionales."
  },
  {
    title: "2. Quiénes pueden usarla",
    body: "Podés usar la aplicación si sos mayor de 18 años. Al registrarte, aceptás estos términos."
  },
  {
    title: "3. Tu cuenta",
    body: "Tenés que dar datos verdaderos. Sos responsable de cuidar tu acceso y no podés compartir tu cuenta con otras personas."
  },
  {
    title: "4. Cómo funciona",
    body: "Publicás una solicitud, urgente o programada. Los profesionales disponibles en tu zona pueden postularse. Vos comparás perfiles y decidís a quién contratar."
  },
  {
    title: "5. Verificación de profesionales",
    body: "Los profesionales verifican su identidad con el RENAPER y su situación fiscal con ARCA. Podrás ver el estado de verificación en cada perfil. La verificación confirma quién es la persona. No garantiza el resultado de cada trabajo."
  },
  {
    title: "6. Pagos",
    body: "Usar la aplicación no tiene costo para vos. Mi Profesional no interviene en el pago de los servicios. Lo acordás directamente con el profesional, junto con el presupuesto y las condiciones. Los profesionales abonan una suscripción mensual y no se cobra comisión por contratación."
  },
  {
    title: "7. Calificaciones y reseñas",
    body: "Solo pueden calificar quienes contrataron un servicio a través de la aplicación. Los comentarios tienen que ser respetuosos. Podés denunciar comentarios falsos, discriminatorios u ofensivos. Mi Profesional los revisa y puede eliminarlos."
  },
  {
    title: "8. Conductas no permitidas",
    body: "No se permite dar datos falsos, hacerse pasar por otra persona, ofender o discriminar, ni usar la aplicación para fines ilegales. Mi Profesional puede suspender o bloquear cuentas cuando existan motivos fundados."
  },
  {
    title: "9. Tus datos y tu ubicación",
    body: "Usamos tus datos para que la aplicación funcione, según la Política de Privacidad. Tu ubicación se usa solo si la autorizás, y podés desactivarla cuando quieras. Podés pedir acceso, rectificación o eliminación de tus datos, conforme a la Ley 25.326. Esas solicitudes se hacen desde la configuración de la aplicación y son gratuitas. No vendemos tus datos."
  },
  {
    title: "10. Responsabilidad",
    body: "Cada servicio es responsabilidad del profesional que lo presta. Mi Profesional no responde por la ejecución ni la calidad del trabajo, sin perjuicio de las obligaciones y responsabilidades que la ley le imponga."
  },
  {
    title: "11. Cancelaciones y reclamos",
    body: "Podés cancelar una solicitud desde la aplicación, sin costo, antes de que un profesional la confirme.\n\nSi ya acordaste el servicio, avisale al profesional por la aplicación con la mayor anticipación posible. Mi Profesional no cobra el servicio. Por eso, cualquier seña o pago que hayan acordado se resuelve entre ustedes.\n\nSi tenés un problema con un servicio, podés enviar un reclamo desde la aplicación o por el canal de contacto. Mi Profesional revisa el caso, escucha a ambas partes y responde dentro de los 5 días hábiles. Cuando corresponda, puede suspender al profesional.\n\nEsto no limita tus derechos como consumidor."
  },
  {
    title: "12. Cambios en estos términos",
    body: "Si cambian, te avisamos de manera clara. Cuando corresponda, te pediremos que los aceptes de nuevo."
  },
  {
    title: "13. Contacto",
    body: "Para consultas, reclamos o pedidos sobre tus datos, escribinos a soporte@miprofesional.com.ar. Respondemos dentro de los 2 días hábiles."
  },
  {
    title: "14. Ley aplicable y tribunales",
    body: "Estos términos se rigen por las leyes de la República Argentina, en especial la Ley 24.240 de Defensa del Consumidor, el Código Civil y Comercial de la Nación y la Ley 25.326 de Protección de los Datos Personales. Ante cualquier conflicto, el usuario puede acudir a los tribunales competentes de su domicilio."
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream px-6 pt-6 pb-10 dark:bg-navy-dark">
      <BackHeader label="Configuración" to="/perfil" />
      <h1 className="mb-1 mt-2 font-rounded text-lg font-bold text-navy dark:text-cream">
        Términos y política de privacidad
      </h1>
      <p className="mb-5 font-caption text-xs text-navy/50 dark:text-cream/50">Términos y Condiciones de Mi Profesional</p>

      <div className="space-y-5">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="font-tech text-sm font-bold text-navy dark:text-cream">{section.title}</p>
            {section.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mt-1 font-caption text-sm leading-relaxed text-navy/70 dark:text-cream/70">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
