<template>
    <div class="container">
      <!-- Contenedor del formulario de inicio de sesión -->
      <div class="form-container">
        <!-- Título del formulario -->
        <p class="title">Iniciar Sesión</p>
        
        <!-- Formulario para ingresar el nombre de usuario y la contraseña -->
        <form @submit.prevent="handleLogin" class="form">
          <input v-model="username" type="text" class="input" placeholder="Username" />
          <input v-model="password" type="password" class="input" placeholder="Password" />
          <button type="submit" class="form-btn">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  /**
   * Componente de inicio de sesión.
   * Permite al usuario ingresar un nombre de usuario y contraseña para iniciar sesión
   */
  
  // Importación de las funcionalidades necesarias
  import { ref } from 'vue'; // 'ref' para variables reactivas
  import { useUserStore } from '../store/user'; // Acceso al store de usuario
  import { useRouter } from 'vue-router'; // Para la navegación entre rutas
  
  // Variables reactivas para el nombre de usuario y la contraseña
  const username = ref('');
  const password = ref(''); // No se usa pero la declaramos por si queremos mas adelante implementar contraseña
  
  // Acceso al store de usuario para gestionar el login
  const userStore = useUserStore();
  
  // Instancia del enrutador para redirigir después de iniciar sesión
  const router = useRouter();
  
  /**
   * Función que maneja el inicio de sesión del usuario.
   * Si el nombre de usuario está vacío, muestra un alerta.
   * Si el nombre de usuario es válido, se loguea y redirige al usuario a la página de inicio.
   */
  const handleLogin = async () => {
    if (!username.value.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }
  
    // Llama al método de login del store y pasa el nombre de usuario
    userStore.login(username.value);
  
    // Redirige al usuario a la página principal
    router.push('/home');
  };
  </script>
  
  <style scoped>
 
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('https://wallpaperaccess.com/full/85327.png') no-repeat center center/cover;
  }
  
 
  .form-container {
    width: 350px;
    background-color: #fff;
    box-shadow: #00000096 0px 5px 50px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 30px;
    text-align: center;
  }
  

  .title {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 10px 0 30px 0;
    font-size: 28px;
    font-weight: 800;
  }
  

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  

  .input {
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    outline: 0 !important;
    box-sizing: border-box;
    padding: 12px 15px;
  }

  .form-btn {
    padding: 10px 15px;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: #9fded5;
    color: rgb(0, 0, 0);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
 
  .form-btn:active {
    box-shadow: none;
  }
  </style>
  