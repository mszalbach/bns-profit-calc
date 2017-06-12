const initialState = {
    items: [
        {"name": "Soulstone", "price": 1600},
        {"name": "Kaolin Refiner", "price": 5700},
        {"name": "Silverfrost Quartz", "price": 17000},
        {"name": "Squio Sap", "price": 2200},
        {"name": "Thight Meat", "price": 0},
        {"name": "Premium Kaolin Refiner", "price": 35000}
    ]
};

export default function pricesReducer( state = initialState, action ) {
    switch ( action.type ) {
        default:
            return state;
    }
}

export function getAhPriceFor( state, props ) {
    return getPriceFor( state, props.craft );
}

export function getPriceFor( state, name ) {
    let item = state.prices.items.find( item => item.name === name );
    return item ? item.price : 0;
}


