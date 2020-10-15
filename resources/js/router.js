import Vue from "vue";
import VueRouter from "vue-router";
import skins from "./skins";
import store from "./store";
import middlewarePipeline from "./middlewarePipeline";
import config from "./config.json";
import api from './api';
import { templateFilter, component } from './functions'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: skins.routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.name == "Logout") {
        store.commit('SET_TOKEN', null)
        router.push({ name: 'Home' });
    }
    await api.get("page/fetch/" + to.name).then((page) => {
        page = page.data.page
        let value = templateFilter(page.template)
        store.commit('pageTemplate', value);
        store.state.pageTemplate.forEach((e, i) => {
            store.commit('setIndex', i)
            component(e.content[0], i)
        });
    });
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    const nearestLayout = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.layout);

    const nearestMiddleware = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.middleware);

    if (nearestWithTitle) {
        document.title = `${config.hotel_name} - ${nearestWithTitle.meta.title}`;
    }

    if (!nearestMiddleware.meta.middleware) {
        return next();
    }

    const middleware = nearestMiddleware.meta.middleware;
    store.commit("SET_LAYOUT", nearestLayout.meta.layout);
    const context = {
        to,
        from,
        next,
        store,
    };
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});

export default router;
