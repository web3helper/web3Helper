<script setup>
import { ref, onMounted } from 'vue'
// const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
// const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

onMounted (() => {
  console.log("======onMounted======")
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

           <button @click="chengTheme('bright')">浅色</button>
            <button @click="chengTheme('dark')">深色</button>
        </div>
    </header>
</template>

<style lang="stylus">
@import "../../assets/css/mixin.styl";

html, #app {
  //这里传入的值为themes.styl中主题配置的属性名称
  bg_color(background_color_main)
   
}
</style>>
