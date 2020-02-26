import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'

import VModal from 'vue-js-modal'
import Vodal from 'vodal';
import VueI18n from 'vue-i18n';
import VueExpandPanel from 'vue-expand-panel'
import VueTelInput from 'vue-tel-input'
import axios from 'axios'

Vue.use(axios)
// import styles
import 'vue-expand-panel/dist/vue-expand-panel.css'
 
// mount with global
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
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