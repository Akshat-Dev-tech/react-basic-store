// In bigger projects we use action creators to keep our code organized and maintainable
// Larger projects → You might have dozens of actions. Centralizing them:
// avoids typos in type strings (by using constants),
// makes actions reusable across multiple components,
// This is an example of how to create action creators for a counter application in Redux , this is also returning object , redux only care about returuing plain object.


// we can use 
// dispatch(increment)
// dispatch(decrement)
// dispatch(reset)
// rather than writing dispatchEvent({ type: 'INCREMENT' }) each time

// import { INCREMENT, DECREMENT, RESET } from "./types";
// export const increment = () => {    
//     return {
//         type: INCREMENT
//     };
// }       

// export const decrement = () => {
//     return {
//         type: DECREMENT
//     };
// }

// export const reset = () => {
//     return {
//         type: RESET
//     };
// }