<template>
   <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary m-0" style="margin-bottom: 20px !important;" data-bs-theme="dark">
      <div class="container-fluid">
         <Router-Link to="/" class="navbar-brand">
            <img src="img/logo.png" alt="GameShop Logo" width="30" height="30" class="logo-image">
            GameShop
         </Router-Link>
         <button  class="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <Router-link to="/" class="nav-link active" aria-current="page">Home</Router-link>
               </li>
               <li class="nav-item">
                  <Router-link to="/cart" class="nav-link">Winkelwagen</Router-link>
               </li>
            </ul>
         </div>
         <span class="badge text-bg-primery position-relative">
            <i class="las la-shopping-cart icon-size text-white">
               <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
                  {{
                     store.cartCount
                  }}
               </span>
               <span class="visually-hidden">Items in cart</span>
            </i>
         </span>
      </div>
   </nav>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useGameStore } from '../store/index.js'

const store = useGameStore()

</script>
