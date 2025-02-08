<template>
    <div class="container">
        <div class="form-container">
            <p class="title">Iniciar Sesión</p>
            <form @submit.prevent="handleLogin" class="form">
                <input v-model="username" type="text" class="input" placeholder="Username">
                <input v-model="password" type="password" class="input" placeholder="Password">
                <button type="submit" class="form-btn">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';

const username = ref('');
const userStore = useUserStore();
const router = useRouter();

const handleLogin = async () => {
    if (!username.value.trim()) {
        alert('Por favor ingresa tu nombre');
        return;
    }

    userStore.login(username.value);

    router.push('/home');
};
</script>

<style scoped>
/* Container centrado en la pantalla */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Ocupa toda la altura de la ventana */
    background-color: #303032;
    /* Fondo oscuro */
}

/* Estilo del formulario */
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
