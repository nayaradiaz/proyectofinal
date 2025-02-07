<template>
  <header>
    <h1>The Rick and Morty</h1>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="perfil">
      <div> <img src="https://img.icons8.com/?size=100&id=hAPVXSp7TpSM&format=png&color=000000" alt="foto-perfil">
      </div>
      <div>
        <p>{{ userName }}</p>
      </div>
    </div>
  </header>
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
body {
  margin: 0;
  padding: 0;
}

/* Estilo general para la barra de navegación */
header {
  display: flex;
  justify-content: space-around;
  background-color: #343a40;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  align-items: center;
  width: auto;
  height: 13vh;
}

.perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
}

a {
  margin: 15px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: larger;
}

p {
  margin: 0;
  padding: 0;
}


/* Estilo para los mensajes */
h1 {
  color: white;
}

/* Botón de logout */
button {
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>