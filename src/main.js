import Vue from "vue";
import App from "./App.vue";
import vSelect from "vue-select";
import "./assets/scss/index.scss";
import store from "./store/store";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false;
Vue.component("v-select", vSelect);

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
