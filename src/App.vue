<template>
   <Nav />

   <router-view/>

   <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue';
import Nav from './components/Nav.vue'
import { useGameStore } from './store/index.js'
import { onBeforeMount } from 'vue'

const store = useGameStore()

onBeforeMount(() => {
   store.loadGames();
   console.log("Games loaded from store:", store.getGames);
});
</script>

<style>

</style>
