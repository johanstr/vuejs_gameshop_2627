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
   const games = ref([
      {
      "id":1,
      "title":"Ryse",
      "description":"Ryse: Son of Rome is a third-person action-adventure hack and slash video game developed by Crytek and published by Microsoft Studios.",
      "image":"https://gamesapi.sd-alfa.nl/img/ryse.jpeg",
      "price":"19.95",
      "created_at":"2019-05-23T10:19:38.000000Z"
   },
   {
      "id":2,
      "title":"Amnesia",
      "description":"Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. ",
      "image":"https://gamesapi.sd-alfa.nl/img/amnesia.jpeg",
      "price":"29.95",
      "created_at":"2019-05-23T10:19:38.000000Z"
   },
   {
      "id":3,
      "title":"Avatar",
      "description":"James Cameron's Avatar: The Game is a 2009 third-person action video game based on James Cameron's 2009 film Avatar. ",
      "image":"https://gamesapi.sd-alfa.nl/img/avatar.jpeg",
      "price":"39.95",
      "created_at":"2019-05-23T10:20:25.000000Z"
   },
   {
      "id":4,
      "title":"Horizon Zero Dawn",
      "description":"Horizon Zero Dawn is een actierollenspel ontwikkeld door Guerrilla Games. ",
      "image":"https://gamesapi.sd-alfa.nl/img/horizonzerodawn.jpeg",
      "price":"39.95",
      "created_at":"2019-05-23T10:20:25.000000Z"
   },
   {
      "id":5,
      "title":"Just Cause",
      "description":"Just Cause 2 is een third-person shooter sandboxspel ontwikkeld door Eidos Interactive en Avalanche Studios.",
      "image":"https://gamesapi.sd-alfa.nl/img/justcause.jpeg",
      "price":"49.95",
      "created_at":"2019-05-23T10:21:03.000000Z"
   },
   {
      "id":6,
      "title":"Project Cars",
      "description":"Project CARS is a motorsport racing simulator video game developed by Slightly Mad Studios. ",
      "image":"https://gamesapi.sd-alfa.nl/img/projectcars.jpeg",
      "price":"39.95",
      "created_at":"2019-05-23T10:21:03.000000Z"
   },
   {
      "id":7,
      "title":"Prototype 2",
      "description":"Prototype 2 is a 2012 open world action-adventure video game. Developed by Canadian studio Radical Entertainment.",
      "image":"https://gamesapi.sd-alfa.nl/img/prototype2.jpeg",
      "price":"39.95",
      "created_at":"2019-05-23T10:21:49.000000Z"
   },
   {
      "id":8,
      "title":"Trine",
      "description":"Trine is a side-scrolling, action platform-puzzle video game developed by Frozenbyte and published by Nobilis. ",
      "image":"https://gamesapi.sd-alfa.nl/img/trine.jpeg",
      "price":"49.95",
      "created_at":"2019-05-23T10:21:49.000000Z"
   },
   {
      "id":9,
      "title":"Watchdogs",
      "description":"Watch Dogs is een open wereld-, action-adventure- en third-person shooter-spel ontwikkeld door Ubisoft Montreal en enkele andere dochterondernemingen van Ubisoft. ",
      "image":"https://gamesapi.sd-alfa.nl/img/watchdogs.jpeg",
      "price":"19.95",
      "created_at":"2019-05-23T10:22:15.000000Z"
   }

   ]);
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
      // const URI = '@/public/games.json';
      // try {
      //    const response = await fetch(URI);
      //    const data = await response.json();
      //    games.value = data;
      // } catch (error) {
      //    console.error('Error loading games:', error);
      // }
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
      } else {
         cart.value.push({ id: item.id, quantity: 1 });
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
