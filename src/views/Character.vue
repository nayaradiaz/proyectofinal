<template>
  <div class="home-container">
    <!-- Se muestra una cuadrícula de personajes utilizando el componente 'Character' para cada uno -->
    <div class="characters-grid">
      <Character v-for="char in characters" :key="char" :character="char" />
    </div>
  </div>
</template>

<script setup>
/**
 * Componente que muestra una lista de personajes de la API de Rick and Morty en una cuadrícula.
 * Cada personaje se pasa al componente 'Character'
 */

// Importación de funcionalidades de Vue
import { ref, onMounted } from 'vue';
import Character from '../components/Card.vue';

// Definir una variable reactiva para almacenar los personajes
const characters = ref([]);

// URL de la API que proporciona los datos de los personajes
const url = "https://rickandmortyapi.com/api/character";

/**
 * Fetch a la API de Rick and Morty para obtener la lista de personajes
 * Este código se ejecuta cuando el componente se monta
 */
onMounted(async () => {

  // Realiza una solicitud a la API
  const response = await fetch(url);
  // Convierte la respuesta a formato JSON
  const data = await response.json();

  // Asigna los resultados de la API a la variable reactiva 'characters'
  characters.value = data.results;

});
</script>

<style scoped>
.home-container {
  padding: 20px;
  text-align: center;
}


.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}
</style>
