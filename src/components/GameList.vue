<template>
   <GameCard v-for="game_detail in store.getGames" :key="game_detail.id" :game="game_detail" />
</template>

<script setup>
import GameCard from './GameCard.vue'
import { useGameStore } from '../store/index.js'

const store = useGameStore()

</script>

<style scoped>

</style>
