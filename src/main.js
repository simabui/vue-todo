import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
