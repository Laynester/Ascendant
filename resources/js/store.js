import Vue from "vue";
import Vuex from "vuex";
import skins from "./skins";

Vue.use(Vuex);

export default new Vuex.Store({ ...skins.store });
