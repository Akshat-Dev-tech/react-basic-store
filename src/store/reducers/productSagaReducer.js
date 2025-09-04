export const productSagaReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_SAGA_PRODUCTS':
            return action.payload || []; // Return the payload or an empty array if payload is undefined
            // return [...state,...action.payload] // This was accumulating results
        default:
            return state;
    }
}