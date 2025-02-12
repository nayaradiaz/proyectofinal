import { defineStore } from 'pinia'; // Importa 'defineStore' de Pinia para crear una tienda (store)
import { ref } from 'vue'; // Importa 'ref' de Vue para crear variables reactivas

/**
 * Definición del store 'user' que maneja el estado del usuario
 * Pinia como sistema de estado.
 */
export const useUserStore = defineStore('user', () => {

  // Estado reactivo que indica si el usuario está logueado
  const isLoggedIn = ref(false);

  // Estado reactivo que almacena el nombre de usuario
  const userName = ref('');

  const imagenPerfil = ref("https://img.icons8.com/?size=100&id=hAPVXSp7TpSM&format=png&color=000000");



  const changeImagen = (imagen) => {
    imagenPerfil.value=imagen;
    console.log(imagenPerfil);
  }

  /**
   * Función para loguear al usuario.
   * Establece 'isLoggedIn' como true y asigna el 'username' a 'userName'.
   * 
   * @param {string} username El nombre de usuario que se usará para autenticar al usuario.
   */
  const login = (username) => {
    isLoggedIn.value = true; // Marca al usuario como logueado
    userName.value = username; // Asigna el nombre de usuario
  };

  /**
   * Función para cerrar sesión.
   * Establece 'isLoggedIn' como false y borra el 'userName'.
   */
  const logout = () => {
    isLoggedIn.value = false; // Marca al usuario como no logueado
    userName.value = ''; // Borra el nombre de usuario
  };




  // Retorna los estados y las funciones para que puedan ser utilizados en otros componentes
  return {
    isLoggedIn,
    userName,
    login,
    logout,
    imagenPerfil,
    changeImagen
  };
});
