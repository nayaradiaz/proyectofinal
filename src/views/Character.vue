<template>
    <div class="home-container">
        <div class="pagination">
            <div class="input-group">
                <form @submit.prevent="filteredCharacters">
                    <input v-model="search" type="text" class="input" name="texto" placeholder="Buscar personajes..."
                        autocomplete="off" />
                    <button class="button--submit" type="submit">Buscar</button>
                </form>
            </div>

            <!-- Botón de Anterior con la flecha a la izquierda -->
            <button @click="prevPage" :disabled="page === 1">
                <div class="arrow-wrapper">
                    <div class="arrow left"></div>
                </div>
                Anterior
            </button>

            <span>Pagina {{ page }} de 42</span>

            <!-- Botón de Siguiente con la flecha a la derecha -->
            <button @click="nextPage" :disabled="page === 42">
                Siguiente
                <div class="arrow-wrapper">
                    <div class="arrow right"></div>
                </div>
            </button>
        </div>
        <p v-if="filteredCharacters.length === 0">No se encontraron personajes.</p>

        <div class="characters-grid">
            <Character v-for="char in filteredCharacters" :key="char.id" :character="char" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Character from "../components/Card.vue";

const search = ref("");
const characters = ref([]);
const page = ref(1);

const fetchCharacters = async () => {

    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}`);
    const data = await response.json();
    characters.value = data.results;

};

const filteredCharacters = computed(() => {
    return characters.value.filter((char) =>
        char.name.toLowerCase().includes(search.value.toLowerCase())
    );

});
const nextPage = () => {
    if (page.value < 42) {
        page.value++;
        fetchCharacters();
    }
};

const prevPage = () => {
    if (page.value > 1) {
        page.value--;
        fetchCharacters();
    }
};

onMounted(fetchCharacters);
</script>

<style scoped>
.home-container {
    padding: 20px;
    text-align: center;
}

.characters-grid {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    text-align: center;
    align-items: center;
}

button {
    --primary-color: #8fc3f3;
    --secondary-color: #002152;
    --hover-color: #eceff2;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    transition: 0.2s background;
}

button .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

button .arrow {
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
}

button .arrow.left::before {
    content: "";
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    left: 0;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(135deg);
}

button .arrow.right::before {
    content: "";
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 0;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
}

button:hover {
    background-color: var(--hover-color);
}

button:hover .arrow {
    background: var(--secondary-color);
}

button:hover .arrow.left::before {
    left: -2px;
}

button:hover .arrow.right::before {
    right: -2px;
}

.input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
}

form {
    display: flex;
    height: 100%;
}

.input {
    height: 40px;
    max-width: 200px;
    padding: 0 1rem;
    color: #000000;
    font-size: 15px;
    border: 1px solid #868686;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
}

.button--submit {
    min-height: 40px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #22c55e;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.button--submit:hover {
    background-color: #15803d;
}

.input:focus,
.input:focus-visible {
    border-color: #525252;
    outline: none;
}
</style>
