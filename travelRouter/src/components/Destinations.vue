<script setup>
import { ref, onMounted } from 'vue';

const destinations = ref([]);

onMounted(async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  destinations.value = data.destinations;
});
</script>

<template>
  <div>
    <div v-for="destination in destinations" :key="destination.id">
      <h1>{{ destination.name }}</h1>
      <p>{{ destination.description }}</p>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      
      <h3>Experiences</h3>
      <div v-for="experience in destination.experiences" :key="experience.slug">
        <h4>{{ experience.name }}</h4>
        <p>{{ experience.description }}</p>
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
      </div>
    </div>
  </div>
</template>