<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoBack from '@/components/GoBack.vue';
import jsonData from '../../public/data.json';

const route = useRoute();
const experience = ref(null);

onMounted(() => {
  const { slug: destinationSlug, experienceSlug } = route.params;

  const destination = jsonData.destinations.find(dest => dest.slug === destinationSlug);
  if (destination) {
    experience.value = destination.experiences.find(exp => exp.slug === experienceSlug);
  }
});
</script>

<template>
  <div v-if="experience" class="experience">
    <GoBack />
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
  <div v-else>
    <GoBack />
    <p>Experience not found</p>
  </div>
</template>