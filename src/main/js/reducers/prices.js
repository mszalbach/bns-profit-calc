const PRICE_ADD = 'price/ADD';
const PRICE_CHANGE = 'price/CHANGE';

const initialState = [
    {"name": "Soulstone", "price": 1600},
    {"name": "Kaolin Refiner", "price": 5700},
    {"name": "Silverfrost Quartz", "price": 17000},
    {"name": "Squio Sap", "price": 2200},
    {"name": "Thight Meat", "price": 0},
    {"name": "Premium Kaolin Refiner", "price": 35000}
];

export default function pricesReducer( state = initialState, action ) {
    switch ( action.type ) {
        case PRICE_ADD:
            return [
                ...state,
                {
                    name: action.name,
                    price: action.price
                }
            ];
        case PRICE_CHANGE:
            let index = state.findIndex( item => item.name === action.name );
            state[index].price = action.price;
            return state.slice( 0 );
        default:
            return state;
    }
}

export const getPrices = ( state ) => state.prices;


export function changePrice( name, price ) {
    return {type: PRICE_CHANGE, name: name, price: Number( price )}
}





