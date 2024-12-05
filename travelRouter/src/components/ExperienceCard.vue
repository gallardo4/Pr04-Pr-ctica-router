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
  <div class="experiences">
    <h3>Top experiences in {{ destinationName }}</h3>
    <div class="destinationExperiences">
      <div v-for="experience in experiences" :key="experience.slug"> 
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <h4>{{ experience.name }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destinationExperiences {
  display: flex;
  gap: 0.2rem;
}
</style>