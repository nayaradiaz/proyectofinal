<template>
    <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
    <div>
        <h1>About</h1>
        <p>Esta es la página de "Acerca de".</p>
    </div>
</template>
<script setup>
import { useUserStore } from '../stores/user';  

</script>
<style scoped></style>