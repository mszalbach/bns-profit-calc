import CraftOverview from "../crafting/craftOverview";
import MarketOverview from "../market/marketOverview";

export const routing = [
    {path: '/crafting', name: 'Crafting', component: CraftOverview},
    {path: '/market', name: 'Market', component: MarketOverview},
];