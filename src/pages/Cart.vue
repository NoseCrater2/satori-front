<template>
  <v-card>
    <v-row justify="center" class="my-6">
    <v-col v-for="cartItem in cartProdcuts" :key="cartItem.id"  style="max-width:1200px"  cols="12">
      <ItemCart :itemCart="cartItem" ></ItemCart>
    </v-col>
  </v-row>
  <div class="text-end text-h4 mx-6">
    TOTAL: {{toCurrency(total)}}
  </div>
  </v-card>

</template>

<script setup>
import ItemCart from '../components/Shop/ItemCart.vue';
import { useStore } from 'vuex';
import { toCurrency } from '../plugins/utils';


const store = useStore();

const cartProdcuts = store.state.cart;
const total = store.getters.totalCart;
</script>
