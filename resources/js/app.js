import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import API from "./api";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

const token = localStorage.getItem("token");

Vue.prototype.$config = window.config;
Vue.prototype.$store = store;
Vue.prototype.$api = API;

if (token) {
    Vue.prototype.$api.defaults.headers.common["Authorization"] =
        "Bearer " + token;
}

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
