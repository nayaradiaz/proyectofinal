<template>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  
    <div v-if="isLoggedIn">
      <h1>Bienvenido, {{ userEmail }}!</h1>
      <button @click="logout">Cerrar sesión</button>
    </div>
  
    <div v-else>
      <h1>No estás logueado. Redirigiendo...</h1>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '../stores/user';  // Asegúrate de tener el alias correcto
  import { useRouter } from 'vue-router';
  import { watch, ref } from 'vue';
  
 
  // Usamos el store de usuario para acceder a los datos de autenticación
  const userStore = useUserStore();
  const router = useRouter();
  
  // Estado reactivo para la autenticación
  const isLoggedIn = ref(userStore.isLoggedIn);
  const userEmail = ref(userStore.userEmail);
  
  // Función de logout
  const logout = () => {
    userStore.logout(); // Cierra sesión
    router.push('/');    // Redirige al login
  };
  
  // Usamos un watch para redirigir al login cuando no esté logueado
  watch(isLoggedIn, (newVal) => {
    if (!newVal) {
      router.push('/'); // Si no está logueado, redirige automáticamente al login
    }
  });
  </script>
  
  <style scoped>
  /* Estilos específicos para la página Home */
  nav {
    margin-bottom: 20px;
  }
  
  h1 {
    color: #333;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  