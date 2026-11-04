<template>
   <GameCard v-for="game_detail in props.games" :key="game_detail.id" :game="game_detail" />
</template>

<script setup>
import GameCard from './GameCard.vue'

const props = defineProps({
   games: {
      type: Array,
      required: true
   }
})
</script>

<style scoped>

</style>
