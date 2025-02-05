<template>
  <nav class="navegacion">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>

  <div v-if="isLoggedIn">
    <h1>Bienvenido, {{ userName }}!</h1>
    <button @click="logout">Cerrar sesión</button>
  </div>

  <div v-else>
    <h1>No estás logueado. Redirigiendo...</h1>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/user';  
import { useRouter } from 'vue-router';
import { watch, ref } from 'vue';


const userStore = useUserStore();
const router = useRouter();

const isLoggedIn = ref(userStore.isLoggedIn);
const userName = ref(userStore.userName);

const logout = () => {
  userStore.logout(); 
  router.push('/');    
};

watch(isLoggedIn, (newVal) => {
  if (!newVal) {
    router.push('/'); 
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