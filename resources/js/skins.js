import config from "./config.json";


import ex_router from './skins/Example/router';
import ex_store from './skins/Example/store';
import Example from './skins/Example/Layout'

import ho_router from "./skins/Horizon/router";
import ho_store from "./skins/Horizon/store";
import Horizon from "./skins/Horizon/Layout";

let store = {
    Example: ex_store,
    Horizon: ho_store,
}[config.theme];

let routes = {
    Example: ex_router,
    Horizon: ho_router,
}[config.theme];

const comps = { Horizon, Example };

export default { store, routes, comps };
