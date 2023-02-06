import { createApp } from 'vue';
import 'normalize.css/normalize.css'
import './assets/css/reset.styl';
import './assets/css/border.styl';


import './style.styl';

import App from './App.vue';
import store from "./store";
import router from "./router/index";
import './mock/mock.js'

const app = createApp(App);
app.use(store) ;
app.use(router) ;
app.mount('#app');
