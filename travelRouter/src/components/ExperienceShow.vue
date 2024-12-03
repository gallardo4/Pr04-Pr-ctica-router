<script setup>

</script>

<template>
    <div v-for="experience in experiences" :key="experience.slug"> 
        <h4>{{ experience.name }}</h4>
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <p>{{ experience.description }}</p>
    </div>
</template>