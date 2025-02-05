import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const userName = ref('');

  const login = (username) => {
    isLoggedIn.value = true;
    userName.value = username;
  };

  const logout = () => {
    isLoggedIn.value = false;
    userName.value = '';
  };

  return {
    isLoggedIn,
    userName,
    login,
    logout
  };
});