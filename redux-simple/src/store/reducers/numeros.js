const initialState = {
    min: 1,
    max: 10
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    //console.log('Reducer Numeros...');
    //console.log(state,' - ', action);

    switch(action.type) {
        case 'NUM_MIN_ALTERADO':
            return {
                ...state,
                min: action.payload
            }
        case 'NUM_MAX_ALTERADO':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
        }
}