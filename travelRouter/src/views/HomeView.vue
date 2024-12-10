<script setup>
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json';

const destinations = jsonData.destinations;
</script>

<template>
  <h1>All destinations</h1>
  <div class="home">
    <div class="destinationCard">
      <div v-for="destination in destinations" :key="destination.id">
        <h3><RouterLink :to="`/destination/${destination.slug}`">{{ destination.name }}</RouterLink></h3>
        <RouterLink :to="`/destination/${destination.slug}`"><img :src="`/images/${destination.image}`" :alt="destination.name" /></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destinationCard {
  display: flex;
  gap: 1rem;
}
</style>