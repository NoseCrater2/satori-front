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

  </v-card>
</template>

<script setup>
defineProps({
  action: Object
})
</script>
