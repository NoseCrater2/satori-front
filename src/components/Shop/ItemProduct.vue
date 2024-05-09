<template>
  <v-card
    class="mx-auto my-6 bg-grey-darken-3"
    max-width="300"
  >

    <v-img
      height="100"
      :src="product.image"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="product.rating"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">
          {{product.rating}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ toCurrency(product.unitary_price) }}
      </div>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <div class="px-4 mb-2">
        <v-chip>{{ product.category.name }}</v-chip>
    </div>

    <v-card-actions >
      <v-btn
        color="deep-purple-lighten-2"
        text="Comprar"
        variant="flat"
        @click="goToBuy(product)"
      ></v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="deep-purple-lighten-2"
        text="Añadir al carrito"
        @click="addToCart(product)"
        border
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
import { toCurrency } from '../../plugins/utils'
  defineProps({
    product: Object
  })

  function addToCart(product){
    store.commit('addProductToCart', product)
  }

  function goToBuy(product){
    console.log(product);
  }
</script>
