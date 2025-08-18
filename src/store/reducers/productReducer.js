export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_PRODUCTS':
            // return action.payload || []; // Return the payload or an empty array if payload is undefined
            return [...state,...action.payload]
        default:
            return state;
    }
}