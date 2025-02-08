<template>
  <header>
    <div class="logo">
      <h1>The Rick and Morty</h1>
    </div>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/character">Character</router-link>
    </nav>
    <div class="perfil">
      <img class="perfil-img" src="https://img.icons8.com/?size=100&id=hAPVXSp7TpSM&format=png&color=000000"
        alt="foto-perfil">
      <p>{{ userName }}</p>
      <button @click="logout" class="logout-btn">
        <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png" alt="Salir">
      </button>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

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
/* Reset y estilos generales */


/* Header */
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px;
  background: #303032;
  /* Marrón oscuro */
  color: #d5c8b8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.logo h1 {
  font-size: 24px;
  margin: 0;
  color: #b2daed;
  /* Azul claro */
}

/* Navegación */
nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #ffffff;
  /* Verde menta */
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}

nav a:hover {
  color: #9fded5;
  /* Azul claro */
}

/* Perfil */
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
  /* Verde menta */
}

.perfil p {
  margin: 0;
  font-weight: bold;
  color: #b2daed;
  /* Azul claro */
}

/* Botón de logout con icono */
.logout-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.logout-btn:hover {
  transform: scale(1.1);
}
</style>