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
import VueSimpleAlert from "vue-simple-alert";


Vue.use(VueSimpleAlert);

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)

// import styles
 
// mount with global
Vue.use(VueI18n);
Vue.use(VueExpandPanel);
Vue.use(VueTelInput);
Vue.config.productionTip = false;
Vue.use(VueCookies);


if(localStorage.getItem("access_token")!='') {

  axios.defaults.headers.common = {
    "Authorization": "Bearer "+localStorage.getItem('access_token')
  };

}


Vue.component(Vodal.name, Vodal);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')