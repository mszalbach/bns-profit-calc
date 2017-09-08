import LoadableComponent from "../../components/loadable/LoadableComponent";

export const routing = [
    {
        path: '/crafting', name: 'Crafting', component: LoadableComponent( {
                                                                               loader: () => import("../crafting/craftOverview"),
                                                                           } )
    },
    {
        path: '/market', name: 'Market', component: LoadableComponent( {
                                                                           loader: () => import("../market/marketOverview"),
                                                                       } )
    },
];