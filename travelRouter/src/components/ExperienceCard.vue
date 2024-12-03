<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true,
  },
  destinationName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h3>Top experiences in {{ destinationName }}</h3>
    <div v-for="experience in experiences" :key="experience.slug"> 
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <h4>{{ experience.name }}</h4>
    </div>
  </div>
</template>