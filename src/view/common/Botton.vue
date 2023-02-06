<script setup>
import { onMounted, ref } from 'vue'
// const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

onMounted (() => {
  console.log("======onMounted======", isLight)
})

defineProps({
  title: String,
  className: String
})

// const count = ref(0)
</script>

<template>
    <botton :class="className">{{ title }}</botton>
</template>

<style lang="stylus" scoped>
.btu-style-1 {
  
}
</style>>
