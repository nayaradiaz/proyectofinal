<template>
 <Header v-if="$route.path !== '/'" /> 
  <router-view />
</template>

<script setup>
import Header from './components/Header.vue';
</script>


<style>
body {
  margin: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

}
</style>
