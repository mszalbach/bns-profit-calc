export const SWITCH_REGION = 'region/SWITCH';
const initialState = 'eu';


export default function regionReducer( state = initialState, action ) {
    switch ( action.type ) {
        case SWITCH_REGION:
            return action.region;
        default:
            return state;
    }
}

export function switchRegion( region ) {
    return {type: SWITCH_REGION, region: region}
}





