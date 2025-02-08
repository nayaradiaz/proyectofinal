<template>
  <!-- Se muestra el Header solo si la ruta no es la raíz -->
  <Header v-if="$route.path !== '/'" /> 
  
  <!-- Renderiza el contenido de la ruta actual -->
  <router-view />
  
  <!-- Se muestra el Footer solo si la ruta no es la raíz -->
  <Footer v-if="$route.path !== '/'" />
</template>

<script setup>
/**
 * Componente que se encarga de la estructura principal de la página.
 * Se importa el Header y el Footer para mostrarlos según la ruta.
 */
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<style>

body {
  margin: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
