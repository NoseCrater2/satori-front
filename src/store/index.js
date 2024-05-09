import { createStore } from "vuex";

const store = createStore({
  state (){
   return {
    cart: [],
   }
  },
  mutations: {
    addProductToCart(state, product){

      const index = state.cart.findIndex(prod => prod.id === product.id )
      if(index === -1){
        state.cart.push( {
          ...product,
          totalSelected: 1,
          total: product.unitary_price
        })
      }else {
       const modified =  state.cart[index];
       modified.totalSelected = modified.totalSelected + 1;
       modified.total =  modified.unitary_price * modified.totalSelected;
       state.cart[index] = modified;
      }

    }
  },

  getters: {
    totalProducts(state){
      return state.cart.length
    },

    totalCart(state){
      let total = 0;
      state.cart.forEach(item => {
        total += item.total;
      });
      return total;
    }
  }
})

export  { store }
