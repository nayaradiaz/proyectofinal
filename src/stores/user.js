import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const username = ref('');

  function setUsername(name) {
    username.value = name;
  }

  return { username, setUsername };
});
