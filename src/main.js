import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'

import VModal from 'vue-js-modal';

Vue.use(VModal, { dialog: true });
import Vodal from 'vodal';
import VueI18n from 'vue-i18n';
import VueExpandPanel from 'vue-expand-panel';
import VueTelInput from 'vue-tel-input';
import axios from 'axios';

Vue.use(axios);
// import styles
 
// mount with global
Vue.use(VueI18n);
Vue.use(VueExpandPanel);
Vue.use(VueTelInput);
Vue.config.productionTip = false;
Vue.use(VueCookies);





Vue.component(Vodal.name, Vodal);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')