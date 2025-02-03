import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const userEmail = ref('');

  const login = (email) => {
    isLoggedIn.value = true;
    userEmail.value = email;
  };

  const logout = () => {
    isLoggedIn.value = false;
    userEmail.value = '';
  };

  return {
    isLoggedIn,
    userEmail,
    login,
    logout
  };
});