import { createStore } from "vuex";

const store = createStore({
  state (){
   return {
    cart: [],
   }
  },
  mutations: {
    addProductToCart(state, product){
      state.cart.push(product)
    }
  },

  getters: {
    totalProducts(state){
      return state.cart.length
    }
  }
})

export  { store }
