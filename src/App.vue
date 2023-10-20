<template>
  <div class="bg-red-500 bg-blue-500 custom:bg-green-500" id="app">
    <AppNavbar/>
    <!-- Aquí irá el resto de tu contenido principal -->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style scoped>
/* Aquí irán tus estilos generales si los tienes */
</style>
