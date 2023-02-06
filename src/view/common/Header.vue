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
    <header class="main-header-container">
      <div class="main-header">
         <a class="header-logo">logo</a>
         <div class="header-nav">header-nav</div>
         <div class="header-info">header-info</div>
      </div>
         
        <!-- <a class="logo card">
          <h1 class="text-3xl font-bold ">
            web3Helper
          </h1>
        </a>
        <div class="nav">
           <ul>
               <li>Home</li>
               <li>Token</li>
               <li>NFT</li>
               <li>Other Tools</li>
           </ul>
        </div>
        <div class="option">
            <button @click="chengTheme('light')">浅色</button>
            <button @click="chengTheme('dark')">深色</button>
        </div> -->
    </header>
</template>

<style lang="stylus">
@import "../../assets/css/mixin.styl";
body {
  bg_color(background_color_main)
}
</style>>
