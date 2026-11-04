import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game_store', () => {
   /*****************************************
    * STATE (Data)
    ****************************************/

   /**
    * Games
    * Structure (Array of objects):
    * [
    *    { 
    *       id: string,
    *       title: string,
    *       price: number,
    *       image: string
    *    },
    *    ...
    * ]
    */
   const games = ref([]);
   /**
    * Shoppingcart
    * Structure (Array of objects):
    * [
    *    { 
    *       id: string, 
    *       quantity: number 
    *    },
    *    ...
    * ]
    */
   const cart = ref([]);

   /****************************************
    * GETTERS (Computed)
    ****************************************/
   const getGames = computed(() => games.value);   // Return all games
   const getCart = computed(() => cart.value);     // Return all items(games) in cart
   
   // Return total number of items in cart
   const cartCount = computed(() => {
      let count = 0;
      cart.value.forEach(item => {
         count += item.quantity;
      });

      return count;
   });

   // Return total price of all items in cart
   const cartTotal = computed(() => {
      let total = 0.0;

      cart.value.forEach(item => {
         const game = findGame(item.id);
         if (game) {
            total += parseFloat(game.price) * parseFloat(item.quantity);
         }
      });

      return total;
   });

   // Return total price of a specific item in cart
   const cartItemTotal = computed((item) => {
      const game = findGame(item.id);

      if (game) {
         return parseFloat(game.price) * parseFloat(item.quantity);
      }

      return 0.0;
   });
   

   /*******************************************************
    * ACTIONS (Methods)
    * Geven toegang tot de state en kunnen deze aanpassen. 
    * Worden aangeroepen vanuit de componenten.
    *******************************************************/

   // Load games from API
   async function loadGames() {
      // TODO:Load games from API
      const URI = 'https://gamesapi.sd-alfa.nl';
      try {
         const response = await fetch(URI);
         const data = await response.json();
         games.value = data;
      } catch (error) {
         console.error('Error loading games:', error);
      }
   }

   // Find a game by its ID
   function findGame(id) {
      return games.value.find(game => game.id === id);
   }

   // Add a game to the cart
   function addToCart(item) {
      // Check if game is already in cart, if so increase quantity
      const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
         existingItem.quantity++;
         existingItem.total = parseFloat(existingItem.quantity) * parseFloat(item.price);
      } else {
         cart.value.push({ id: item.id, quantity: 1, total: parseFloat(item.price) * 1.0 });
      }
   }

   // Remove a game from the cart
   function removeFromCart(item) {
      // Remove game from cart
      const index = cart.value.indexOf(item);
      if (index > -1) {
         cart.value.splice(index, 1);
      }
   }

   // Increase the quantity of a game in the cart
   function increaseQuantity(item) {
      item.quantity++;
      item.total = parseFloat(item.quantity) * parseFloat(findGame(item.id).price);
   }

   // Decrease the quantity of a game in the cart
   function decreaseQuantity(item) {
      if (item.quantity > 1) {
         item.quantity--;
         item.total = parseFloat(item.quantity) * parseFloat(findGame(item.id).price);
      } else {
         removeFromCart(item);
      }
   }
   
   /***********************************************************************************
    * Return all public methods and properties
    * By returning these, they can be accessed from the components that use this store.
    * Without returning them, they would be private to this store and 
    * not accessible from outside.
    * In fact this means we make them public by returning them, 
    * and private by not returning them.
    * 
    * Note: The state (data) is not returned, because it is already 
    * accessible through the getters.
    * The getters are returned, so they can be accessed from the components 
    * that use this store.
    * The actions (methods) are returned, so they can be called from the 
    * components that use this store.
    **********************************************************************************/
   return {
      getGames,
      getCart,
      cartCount,
      cartTotal,
      cartItemTotal,
      loadGames,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity
   }
})
