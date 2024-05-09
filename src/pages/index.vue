<template>
 <v-row justify="space-around" class="w-100">
  <v-col cols="4">
    <MainAccessItem
      v-for="action in actions" :key="action.id"
      :action="action"
     />
  </v-col>
 </v-row>
</template>

<script setup>
import MainAccessItem from '../components/Home/MainAccessItem.vue';

const actions = [
  {
    title: 'Comprar productos',
    text: 'Listado de productos en venta',
    icon: 'mdi-account-cash',
    color:'blue',
    route: '/products'
  },
  {
    title: 'Carrito',
    text: 'Productos elegidos que aún no has comprado',
    icon: 'mdi-cart',
    color:'yellow-darken-2',
    route: '/cart'
  },
  {
    title: 'Ver mis compras',
    text: '(En construcción)',
    icon: 'mdi-cart-check',
    color:'green',
    route: '/'
  },

];

</script>
