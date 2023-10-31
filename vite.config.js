import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Establecer encabezados específicos para manejar el tipo MIME
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
    // Otras configuraciones del servidor si las tienes
  },
});