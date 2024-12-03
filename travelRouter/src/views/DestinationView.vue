<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ExperienceCard from '@/components/ExperienceCard.vue';
import jsonData from '../../public/data.json';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
const destination = ref(null);

const loadDestination = () => {
  const slug = route.params.slug;
  destination.value = jsonData.destinations.find(dest => dest.slug === slug);
};

onMounted(loadDestination);

watch(
  () => route.params.slug,
  (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
      destination.value = null;
      loadDestination();
    }
  }
);
</script>

<template>
  <GoBack />
  <div v-if="destination">
    <h1>{{ destination.name }}</h1>
    <img :src="`/images/${destination.image}`" :alt="destination.name" />
    <p>{{ destination.description }}</p>

    <ExperienceCard
      :experiences="destination.experiences" 
      :destinationName="destination.name"
    />
  </div>
  <div v-else>
    <p>Destination not found</p>
  </div>
</template>