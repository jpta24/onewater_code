<template>
  <div class="bg-red-500 bg-blue-500 custom:bg-green-500" id="app">
    <AppNavbar/>
    <MarqueeBar/>
    
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import MarqueeBar from './components/MarqueeBar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    MarqueeBar
  }
}
</script>

<style scoped>
/* Aquí irán tus estilos generales si los tienes */
</style>
