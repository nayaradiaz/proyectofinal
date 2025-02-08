<template>
  <div class="home-container">
    <div class="characters-grid">
      <Character v-for="char in characters" :key="char" :character="char" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/user';
import Character from '../components/Card.vue';  // Importamos el componente Character

const userStore = useUserStore();
const characters = ref([]);  // Para almacenar los personajes

// URL de la API
const url = "https://rickandmortyapi.com/api/character";

// Hacer fetch a la API
onMounted(async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener los datos');
    const data = await response.json();
    characters.value = data.results;  // Almacenamos los resultados en el array de personajes
  } catch (error) {
    console.error('Error en la API:', error);
  }
});
</script>

<style scoped>
.home-container {
  padding: 20px;
  text-align: center;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px,250px));
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}
</style>
