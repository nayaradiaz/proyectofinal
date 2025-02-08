<template>
    <div class="container">
      <!-- Título con el nombre de usuario que llega desde el store -->
      <h1>¡Bienvenido {{ userName }} al Multiverso de Rick and Morty!</h1>
      <div class="content">
        <!-- Descripción de la aventura -->
        <p>Explora las aventuras interdimensionales de Rick y Morty, conoce personajes excéntricos y sumérgete en el caos.</p>
        <!-- Botón para redirigir al usuario a la página de personajes -->
        <button @click="irA">Explorar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  /**
   * Componente que muestra una bienvenida al usuario y una descripción de la serie Rick and Morty.
   * Ofrece un botón para explorar personajes que redirige a una ruta específica.
   */
  
  // Importación de funcionalidades necesarias
  import { useUserStore } from '../store/user'; // Accede al estado del usuario
  import { ref } from 'vue'; // Importa 'ref' para variables reactivas
  import { useRouter } from 'vue-router'; // Para usar el enrutador y navegar entre páginas
  
  // Instancia del enrutador
  const router = useRouter();
  
  // Acceso al store de usuario
  const userStore = useUserStore();
  
  // Se obtiene el nombre del usuario desde el store
  const userName = ref(userStore.userName);
  
  /**
   * Función que redirige al usuario a la página de personajes cuando se hace clic en el botón.
   */
  const irA = () => {
    router.push('/character'); // Redirige a la ruta de los personajes
  }
  </script>
  
  <style scoped>
 
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
    background: url('https://wallpaperaccess.com/full/85320.jpg') no-repeat center center/cover;
    color: white;
  }
  

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  
 
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    border-radius: 10px;
  }
  
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
 
  button {
    padding: 0.75rem 1.5rem;
    background-color: #22c55e;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  
  button:hover {
    background-color: #15803d;
  }
  </style>
  