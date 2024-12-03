<script setup>
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json';

const destinations = jsonData.destinations;
</script>

<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations" v-for="destination in destinations" :key="destination.id">
      <h3><RouterLink :to="`/destinationDetail/${destination.slug}`">{{ destination.name }}</RouterLink></h3>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </div>
  </div>
</template>