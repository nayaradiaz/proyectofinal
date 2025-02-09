<template>
  <header>
    <!-- Contenedor del logo -->
    <div class="logo">
      <router-link to="/home">
        <h1>The Rick and Morty</h1>
      </router-link>
    </div>

    <!-- Barra de navegación con enlaces a otras páginas -->
    <nav>
      <router-link to="/home">Inicio</router-link>
      <router-link to="/character">Personajes</router-link>

    </nav>

    <!-- Sección de perfil del usuario -->
    <div class="perfil">
      <!-- Imagen del perfil -->
      <img class="perfil-img" src="https://img.icons8.com/?size=100&id=hAPVXSp7TpSM&format=png&color=000000"
        alt="foto-perfil">
      <!-- Nombre del usuario -->
      <p>{{ userName }}</p>
      <!-- Botón para cerrar sesión -->
      <button @click="logout" class="logout-btn">
        <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png" alt="Salir">
      </button>
    </div>
  </header>
</template>

<script setup>
/**
 * Componente de cabecera (Header) que contiene el logo, la navegación, y el perfil del usuario.
 * Permite al usuario ver su nombre y foto, además de tener la opción de cerrar sesión.
 */

// Importaciones necesarias
import { useUserStore } from '../store/user'; // Acceso al store de usuario para manejar la sesión
import { useRouter } from 'vue-router'; // Para navegar entre las rutas
import { ref, watch } from 'vue'; // 'ref' para las variables reactivas y 'watch' para observar cambios

// Acceso al store de usuario y al router
const userStore = useUserStore();
const router = useRouter();

// Variables reactivas para manejar el estado de sesión y el nombre de usuario
const isLoggedIn = ref(userStore.isLoggedIn);
const userName = ref(userStore.userName);

/**
 * Función para cerrar sesión.
 * Resetea el estado de sesión en el store y redirige al usuario a la página de inicio de sesión.
 */
const logout = () => {
  userStore.logout(); // Llama a la función logout del store para borrar la información de sesión
  router.push('/'); // Redirige a la página de inicio de sesión
};

/**
 * Observa el estado de la variable 'isLoggedIn'.
 * Si el usuario no está logueado, se redirige a la página de inicio de sesión.
 */
watch(isLoggedIn, (newVal) => {
  if (!newVal) {
    router.push('/'); // Si el usuario no está logueado, lo redirige al login
  }
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px;
  background: #303032;
  color: #d5c8b8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: background 0.3s ease-in-out;
}


header:hover {
  background: #3a3a3c;
}

.logo a {
  text-decoration: none;
  color: inherit;
}

.logo h1 {
  font-size: 24px;
  margin: 0;
  color: #b2daed;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
}


.logo h1:hover {
  color: #9fded5;
}


nav {
  display: flex;
  gap: 20px;
}


nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease-in-out, transform 0.2s;
}


nav a:hover {
  color: #9fded5;
  transform: scale(1.1);
}


.perfil {
  display: flex;
  align-items: center;
  gap: 10px;
}

.perfil-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #9fded5;
  transition: transform 0.3s ease-in-out;
}


.perfil-img:hover {
  transform: rotate(10deg) scale(1.1);
}


.perfil p {
  margin: 0;
  font-weight: bold;
  color: #b2daed;
  transition: color 0.3s ease-in-out;
}


.perfil p:hover {
  color: #9fded5;
}


.logout-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}


.logout-btn:hover {
  transform: scale(1.2) rotate(5deg);
}
</style>
