<script setup>
import { ref, onMounted } from 'vue'

// const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
// const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

onMounted (() => {
  const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  const setColorScheme = e => {
  if (e.matches) {
      // Dark
      chengTheme('dark') 
      console.log('Dark mode')
    } else {
      // Light
      chengTheme('light') 
      console.log('Light mode')
    }
  }
    
  setColorScheme(colorSchemeQueryList);
  colorSchemeQueryList.addEventListener('change', setColorScheme);
})

function chengTheme(theme) {
  window.document.documentElement.setAttribute('data-theme', theme);
}
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <header class="mod-header">
        <a class="logo card">
            web3Helper 
        </a>
        <div class="nav"></div>
        <div class="option">
            <button @click="chengTheme('light')">浅色</button>
            <button @click="chengTheme('dark')">深色</button>
        </div>
    </header>
</template>

<style lang="stylus">
@import "../../assets/css/mixin.styl";
body {
  bg_color(background_color_main)
}
</style>>
