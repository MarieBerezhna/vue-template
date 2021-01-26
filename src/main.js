import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
