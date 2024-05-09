<template>
  <v-app>
    <v-app-bar app
      density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Prueba técnica</v-app-bar-title>

        <template v-slot:append>
          <v-btn></v-btn> <v-btn class="text-none" stacked>
              <v-badge color="error" :content="store.getters.totalProducts">
                  <v-icon>mdi-cart</v-icon>
              </v-badge>
          </v-btn>
        </template>
      </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>


<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>
