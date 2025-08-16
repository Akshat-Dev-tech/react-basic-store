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