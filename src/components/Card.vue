<template>
  <!-- Tarjeta de personaje -->
  <div class="character-card">
    <!-- Imagen del personaje -->
    <img :src="character.image" alt="Character Image" class="character-img" />
    <!-- Nombre del personaje -->
    <h3 class="character-name">{{ character.name }}</h3>

    <!-- Botón para abrir el modal -->
    <button @click="openModal">
      <span class="transition"></span>
      <span class="gradient"></span>
      <span class="label">Ver Detalles</span>
    </button>
  </div>

  <!-- Modal para mostrar más detalles -->
  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <!-- Detalles del personaje en el modal -->
      <h2>{{ character.name }}</h2>
      <img :src="character.image" :alt="character.name" />
      <p><strong>Estado:</strong> {{ character.status }}</p>
      <p><strong>Especie:</strong> {{ character.species }}</p>
      <p><strong>Género:</strong> {{ character.gender }}</p>

      <!-- Botón para cerrar el modal -->
      <button @click="closeModal">
        <span class="transition"></span>
        <span class="gradient"></span>
        <span class="label">Cerrar</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Definición de las propiedades que el componente recibe.
 * @property {Object} character - Información sobre el personaje.
 */
defineProps({
  character: {
    type: Object,
  }
});

// Estado del modal, por defecto es false
const showModal = ref(false);

/**
 * Función para abrir el modal y bloquear el desplazamiento del fondo.
 */
const openModal = () => {
  showModal.value = true;
  document.body.style.overflow = "hidden";
}

/**
 * Función para cerrar el modal y restaurar el desplazamiento del fondo.
 */
const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = "auto";
};

/**
 * Restaura el desplazamiento del fondo si el componente es desmontado.
 */
onUnmounted(() => {
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
.character-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.character-card:hover {
  transform: scale(1.05);
}

.character-img {
  width: 100%;
  height: auto;
  border-radius: 30%;
}

.character-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

button {
  font-size: 17px;
  padding: 1em 2.7em;
  font-weight: 500;
  background: #1f2937;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
  cursor: pointer;
  height: 50px;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.6em;
  margin-top: -0.25em;
  background-image: linear-gradient(rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3));
}

.transition {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: rgba(19, 226, 226, 0.6);
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button:hover .transition {
  width: 14em;
  height: 14em;
}

button:active {
  transform: scale(0.97);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
}

.modal-content {
  color: white;
  background: #303032;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 350px;
  pointer-events: auto;
}

.modal-content img {
  width: 80%;
  border-radius: 50%;
}
</style>
