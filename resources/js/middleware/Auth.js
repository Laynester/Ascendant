export default function auth({ next, store }) {
    if (!store.getters.authenticated) {
        return next({
            name: "Login",
        });
    }
    return next();
}
