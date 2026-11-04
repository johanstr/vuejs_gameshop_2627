<template>
   <div class="col">
      <div class="card shadow-sm">
         <img :src="props.game.image" :alt="props.game.title" class="game-image">
         <div class="card-body body-bg">
            <p class="card-text">{{ props.game.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
               <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                     <i class="las la-info-circle icon-size"></i> Info</button>
                  <button type="button" class="btn btn-sm btn-danger">
                     <i class="las la-shopping-cart icon-size text-white"></i> Buy</button>
               </div>
               <small class="text-muted">€ {{ props.game.price }}</small>
            </div>
         </div>
      </div>
   </div>

</template>


<script setup>
const props =defineProps({
   game: {
      type: Object,
      required: true
   }
})

if (props.game.id == 1)
{
   console.log("Game ID is 1");
   
}

</script>

<style scoped>
.body-bg {
   background-color: #f8f9fa;
}
</style>
