import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias para crear el router
import LoginPage from '../views/LoginPage.vue'; // Componente de la página de inicio de sesión
import Home from '../views/Home.vue'; // Componente de la página principal
import Character from '../views/Character.vue'; // Componente de la página de personajes

/**
 * Definición de las rutas de la aplicación.
 * Mapea las rutas a los componentes correspondientes.
 */
const routes = [
  // Ruta para la página de inicio de sesión
  { path: '/', component: LoginPage },

  // Ruta para la página principal (Home)
  { path: '/home', component: Home },

  // Ruta para la página de personajes
  { path: '/character', component: Character },
];

/**
 * Crea y configura el router de la aplicación.
 * Utiliza el historial web para manejar las rutas.
 */
const router = createRouter({
  history: createWebHistory(), // Configura el historial para que funcione en la web
  routes // Asocia las rutas definidas con el router
});

export default router; // Exporta el router para usarlo en la aplicación
