<script setup>
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json';

const destinations = jsonData.destinations;
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <div v-for="destination in destinations" :key="destination.id">
    <RouterLink :to="'/destinationDetail/' + destination.slug">{{ destination.name }}</RouterLink>
  </div>
  <RouterLink to="/dashboard">Dashboard</RouterLink>
  <RouterLink to="/itb">ITB</RouterLink>
</template>
