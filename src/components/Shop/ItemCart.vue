<template>
   <v-card color="grey-darken-2">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ itemCart.name }}
          </v-card-title>

      <v-card-subtitle>
        <p> Cantidad:  {{ itemCart.totalSelected }}</p>
        <p> Precio unitario:  {{ toCurrency(itemCart.unitary_price) }}</p>
        <p> Precio total:  {{toCurrency(itemCart.total)}}</p>

      </v-card-subtitle>

        <v-card-actions>
          <v-btn
            class="ms-2"
            size="small"
            text="Comprar"
            variant="outlined"
          ></v-btn>
          <v-btn
            class="ms-2"
            size="small"
            text="Eliminar"
            variant="outlined"
          ></v-btn>
        </v-card-actions>
      </div>

      <v-avatar
        class="ma-3"
        rounded="0"
        size="125"
      >
        <v-img :src="itemCart.image"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script setup>
import { toCurrency } from '../../plugins/utils'
defineProps({
    itemCart: Object
})
</script>
