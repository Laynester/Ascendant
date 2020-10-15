import Any from "../../middleware/Any";
import Auth from "../../middleware/Auth";

import Page from './assets/Page'

export default [
    {
        name: "Home",
        path: "/",
        component: Page,
        meta: {
            title: "Home",
            layout: "App",
            middleware: [Any],
        },
    },
    {
        name: "Logout",
        path: "/logout",
        component: Page,
        meta: {
            title: "Logout",
            layout: "App",
            middleware: [Any],
        },
    },
];
