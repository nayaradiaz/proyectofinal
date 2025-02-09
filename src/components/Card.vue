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
      <button @click="closeModal" class="close"> Cerrar </button>
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
  padding: 0.75rem 1.5rem;
  background-color: #303032;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}


button:hover {
  background-color: #303032da;
}

.close {
  padding: 0.75rem 1.5rem;
  background-color: #d62c2c;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.close:hover {
  background-color: #d62c2cce;


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
