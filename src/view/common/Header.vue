<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const appThemeType = computed(() => store.state.app.appThemeType)
console.log(appThemeType.value)

// const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
// const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
// let themeType
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
  store.dispatch("app/setAppThemeType", theme)
  window.document.documentElement.setAttribute('data-theme', theme);
}

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <header class="header-container">
      <div class="header-main">
             <a class="header-logo">web3Helper</a>
             <div class="header-nav">
                 <div class="menu-button">
                     Home
                 </div>
                 <div class="menu-button">
                      Token
                     <i class="icon iconfont icon-arrow-down"></i>
                     <div class="dropdown-box dropdown-box-hidden"> 
                         <div class="extra-container extra-container-horizontal">
                               <div class="extra-box"> 
                                    <a class="icon-button extra-buttons"> <span class="extra-text">Batch sending</span> </a>
                                    <a class="icon-button extra-buttons"> <span class="extra-text">Batch collection</span> </a>
                                    <a class="icon-button extra-buttons"> <span class="extra-text">Batch collection</span> </a>
                                    <a class="icon-button extra-buttons"> <span class="extra-text">Batch collection</span> </a>
                                    <a class="icon-button extra-buttons"> <span class="extra-text">Batch collection</span> </a>
                                    <a class="icon-button extra-buttons"> <span class="extra-text">Batch collection</span> </a>
                               </div>
                         </div>
                     </div>
                 </div>
                 <div class="menu-button">
                      NFT
                     <i class="icon iconfont icon-arrow-down"></i>
                 </div>
                 <div class="menu-button">
                      Defi
                     <i class="icon iconfont icon-arrow-down"></i>
                 </div>
                 <div class="menu-button">
                     contract Tools 
                     <i class="icon iconfont icon-arrow-down"></i>
                 </div>
                 <div class="menu-button">
                      Other Tools 
                     <i class="icon iconfont icon-arrow-down"></i>
                 </div>
                 <div class="menu-button">
                     express news 
                     <i class="icon iconfont icon-arrow-down"></i>
                 </div>
             </div>
             <div class="header-info"> 
                  <div class="action-bar">
                    <div class="action-bar-themeButton wrapper theme-button">
                      <svg v-if="appThemeType === 'light'" @click="chengTheme('dark')"  width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.7853 14.1328C19.4458 14.924 17.8833 15.3781 16.2148 15.3781C11.2443 15.3781 7.21484 11.3486 7.21484 6.37805C7.21484 5.4171 7.36545 4.49133 7.64434 3.62305C4.99316 5.18897 3.21484 8.07571 3.21484 11.3778C3.21484 16.3484 7.24428 20.3778 12.2148 20.3778C16.2245 20.3778 19.6217 17.7558 20.7853 14.1328Z" fill="#DDE3F0"></path></svg>
                      <svg v-else @click="chengTheme('light')" width="24" height="24"  viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5.5" fill="#FFB340"></circle><rect x="11.5" y="2.5" width="1" height="3" fill="#FFB340"></rect><rect x="11.5" y="18.5" width="1" height="3" fill="#FFB340"></rect><rect x="21.5" y="11.5" width="1" height="3" transform="rotate(90 21.5 11.5)" fill="#FFB340"></rect><rect x="5.5" y="11.5" width="1" height="3" transform="rotate(90 5.5 11.5)" fill="#FFB340"></rect><rect x="18.3613" y="4.92969" width="1" height="3" transform="rotate(45 18.3613 4.92969)" fill="#FFB340"></rect><rect x="7.04883" y="16.2422" width="1" height="3" transform="rotate(45 7.04883 16.2422)" fill="#FFB340"></rect><rect x="19.0684" y="18.3672" width="1" height="3" transform="rotate(135 19.0684 18.3672)" fill="#FFB340"></rect><rect x="7.75586" y="7.05078" width="1" height="3" transform="rotate(135 7.75586 7.05078)" fill="#FFB340"></rect></svg>
                    </div>
                    <div class="action-bar-language wrapper theme-button">
                       <i class="icon iconfont icon-Language font-icon-size"></i>
                       <i class="icon iconfont icon-arrow-down font-icon-size"></i>
                       <div class="cl-language"> 
                            <ul>
                               <li>English</li>
                               <li>日本語</li>
                               <li>简体中文</li>
                               <li>繁體中文</li>
                            </ul>
                       </div>
                    </div>
                    <div class="action-bar-wallet-connect wrapper theme-button">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="5" y="8" width="22" height="18" rx="1" stroke="#B6BCCA" stroke-width="2"></rect><path d="M16 13L27 13V21H16L16 13Z" stroke="#B6BCCA" stroke-width="2"></path><circle cx="21.5" cy="17" r="1.5" fill="#B6BCCA"></circle></svg></div>
                   </div>
           </div>
      </div>
    </header>
</template>

<style lang="stylus">
@import "../../assets/css/mixin.styl";
body {
  bg_color(background_color_main)
}

.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%
  bg_color(background_color_box);
  z-index 1000;
  border_line_Color(border_lineColor);

  .header-main {
      width: 98%;
      max-width: 1370px;
      margin: 0 auto;
      padding:16px 0;
      display: flex;
      align-items: center;
    
      .header-logo {
         display: flex;
         align-items: center;
         cursor: pointer;
         margin-right: 32px
      }

      .header-nav {
        display: flex
   
        .menu-button {
          position: relative;
          height: 32px;
          line-height: 32px;
          font-size: 17px
          font-weight: inherit;
          margin: 0 4px;
          padding: 0 12px;
          border-radius: 8px;
          white-space: nowrap;
          transition: background .2s ease-in;
          cursor: pointer;
          font_color(font_color_main);
          .dropdown-box {
              position: absolute;
              // left: -9999px;
              // top: -9999px;
              z-index: 1070;
              // display: block;
              font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
              font-size: 12px;
              font-weight: 400;
              line-height: 1.5;
              // visibility: hidden;
              .extra-container-horizontal {
                  width: 470px;
              }
              .extra-container {
                  box-sizing: border-box;
                  width: 256px;
                  padding: 8px;
                  bg_color(background_color_box);
                  // box-shadow: 0 2px 12px 0 var(--drop-down-shadow-color);
                  border-radius: 12px;
                  .extra-box {
                    display: flex;
                    flex-wrap: wrap;

                    .extra-buttons {
                        display: block;
                        box-sizing: border-box;
                        border-radius: 12px;
                        padding: 12px;
                        transition: background .3s linear;
                        margin-bottom: 4px;
                    }
                  }
              }
          }
        }
     
      }
      .header-info {
        flex: 1 1;
        height: 40px;
        .font-icon-size {
           font-size: 18px
           font_color(background_color_icon);
        }
        .action-bar {
           display: flex;
           justify-content: flex-end;
           align-items: center;
           
           .wrapper {
             display: flex;
             justify-content: center;
             align-items: center;
             cursor:pointer;
             height: 32px;
             width: 32px;
             border-radius: 8px;
           }

           .theme-button{
               position: relative;
               margin-left: 16px;
            }

            .action-bar-language {
                 position: relative;

                .cl-language {
                    position : absolute;
                    top: 30px;
                    bg_color(background_color_box);
                    font_color(font_color_main);
                    padding: 8px 15px;
                    border-radius: 8px;
                    cursor: pointer;
                    background: #fff
                    width: 130px
                    transition: max-height 15.25s;
                    visibility: hidden;

                    li {
                      padding: 5px 10px;
                      font-size: 16px 
                    }
                }
            }
            .action-bar-language:hover .cl-language{
                visibility: visible;
            }
        }
      }
  }
}



</style>>
