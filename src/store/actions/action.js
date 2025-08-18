//Adding action creator for Redux
// This function creates an action object that can be dispatched to the Redux store.
// It takes an action type and a payload, returning an object with the type and payload properties.
// Common Functions
export const action = (actionType, payload) => {
    return {
        type: actionType,
        payload: payload
    };
}

export const fetchData = () =>{
    return async (dispatch) => {    
    const data = await fetch('https://dummyjson.com/products/category/smartphones') || {}
    const responseJson = await data.json();
    console.log(responseJson.products);
    dispatch({
        type: 'SHOW_PRODUCTS',
        payload: responseJson.products
    });
}
}