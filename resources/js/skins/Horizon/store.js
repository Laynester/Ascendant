import API from "../../api";

export default {
    state: {
        layout: "processor",
        registerVisible: false,
        token: localStorage.getItem("token") || "",
        pageTemplate: null,
        pageContent: [],
        news: { articles: null, featured: null },
        user: null
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
        clearToken(state, payload) {
            state.token = null;
            localStorage.removeItem('token');
            API.defaults.headers.common["Authorization"] = null;
        },
        setUser(state, payload) {
            state.user = payload
        },
        pageTemplate(state, payload) {
            state.pageTemplate = payload;
        },
        setIndex(state, payload) {
            state.pageContent[payload] = []
        },
        contentPush(state, payload) {
            state.pageContent[payload.index].push(payload.element);
        },
        setNews(state, payload) {
            state.news.articles = payload
        },
        setNewsFeatured(state, payload) {
            state.news.featured = payload
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
    actions: {
        login(context, payload) {
            context.commit('SET_TOKEN', payload.token)
            context.commit('setUser', payload.user)
        }
    },
};
