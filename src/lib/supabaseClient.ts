import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // No tiramos el import entero: dejamos que la app cargue en modo
  // "sin backend conectado todavía" y que las pantallas muestren su
  // estado vacío en vez de una pantalla blanca. Ver README.md.
  //
  // createClient tira un error si le pasás un string vacío (no lo deja
  // pasar como "sin configurar"), así que sin esta URL/key placeholder
  // la página entera quedaba en blanco en cualquier build sin .env —
  // por ejemplo GitHub Pages, que no tiene el .env (está en .gitignore).
  console.warn(
    "[Mi Profesional] Faltan VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — copiá .env.example a .env y completá con tu proyecto de Supabase."
  );
}

export const supabase = createClient(supabaseUrl || "https://placeholder.supabase.co", supabaseAnonKey || "placeholder-anon-key");
