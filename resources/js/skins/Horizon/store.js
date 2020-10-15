import API from "../../api";

export default {
    state: {
        layout: "processor",
        registerVisible: false,
        token: localStorage.getItem("token") || "",
        pageTemplate: null,
        pageContent: [],
        news: null
    },
    mutations: {
        SET_LAYOUT(state, payload) {
            state.layout = payload;
        },
        SET_TOKEN(state, payload) {
            state.token = payload;
            localStorage.setItem("token", payload);
            API.defaults.headers.common["Authorization"] = "Bearer " + payload;
        },
        pageTemplate(state, payload) {
            state.pageTemplate = payload;
        },
        setIndex(state, i) {
            state.pageContent[i] = []
        },
        contentPush(state, p) {
            state.pageContent[p.index].push(p.element);
        }
    },
    getters: {
        authenticated(state) {
            return !!state.token;
        },
        layout(state) {
            return state.layout;
        },
    },
    actions: {},
};
