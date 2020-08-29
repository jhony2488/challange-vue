import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSession from "vue-session";
import VueTheMask from "vue-the-mask";
import axios from "axios";
import { functionAxios } from "./assets/js/axios";

Vue.use(VueTheMask);
Vue.use(VueSession);

functionAxios.axios(Vue, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
