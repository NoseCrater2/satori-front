<template>
  <v-card>
    <v-card-title class="text-center text-h3">
      COMPRAR PRODUCTOS
    </v-card-title>
    <v-data-iterator
      :items="productList"
      :items-per-page="5"
    >

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
              v-for="item in items"
              :key="item.id"
              cols="auto"
              md="4"
            >
            <ItemProduct  :product="item.raw"></ItemProduct>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script setup>
import { ref} from 'vue'
import httpClient from "@/plugins/httpClient";
import ItemProduct from '../components/Shop/ItemProduct.vue'
const  productList = ref([]);
httpClient.get('products').then( products  => {
  productList.value = products;
});
</script>
