import {forgekeepers} from "./forgekeepersCrafting";
import {radiantring} from "./radiantringCrafting";
import {transmute} from "./transmuteCrafting";
import {acquiredtaste} from "./acquiredtasteCrafting";
import {earthseer} from "./earthseerCrafting";
import {silvercauldron} from "./silvercauldronCrafting";
import {soulwarden} from "./soulwardenCrafting";

export const initialCraftingState = [
    ...acquiredtaste,
    ...earthseer,
    ...forgekeepers,
    ...radiantring,
    ...silvercauldron,
    ...soulwarden,
    ...transmute
];
