import config from "./config.json";

import ho_router from "./skins/Horizon/router";
import ho_store from "./skins/Horizon/store";
import Horizon from "./skins/Horizon/Layout";

let store = {
    Horizon: ho_store,
}[config.theme];

let routes = {
    Horizon: ho_router,
}[config.theme];

const comps = { Horizon };

export default { store, routes, comps };
