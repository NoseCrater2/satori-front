<template>
  <v-card
    class="text-white ma-4"
    :color="action.color"
    width="100%"
    height="200"
    :prepend-icon="action.icon"
    :title="action.title"
    :to="action.route"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      {{ action.text }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">


        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
            <span class="subheading">45</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  action: Object
})
</script>
