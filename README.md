Multipe reducers:

when we pass previous state and action to reducer,
the passed state only contains the state related to it. 

In counter reducer only counter state will be passed to it.
In user reducer only user state will be passed to it.

we are directly doing on INCREMENT , state + 1;

no need to do state.counter + 1 because counter state is passed to it not the global state.
when we do state.counter it will try to search it inside counter but that state itself is counter.

	{
 		counter: counterReducer(state.counter, action), //refering only counter
		user: userReducer(state.user, action) //refering only user
	}


//since we add middleware to dispatch things apart from plain objects like fun(),
//there's one more concept 

dispatching action() or dispatching func will work until Functions return a plain JavaScript object with a type field (and optionally payload) Works without middleware :

Example:

const action = (type, payload) => ({ type, payload });
dispatch(action('INCREMENT'));


Works without middleware, because Redux natively supports dispatching action objects. 
Best for: Simple actions that don't involve side effects or async logic.



this won't work 


Another Failing Example: async Function without Middleware
export const action = async (actionType, payload) => {
  await fetch('/api/data');
  return { type: actionType, payload };
};

dispatch(action('INCREMENT'));
action() returns a Promise because it's async, even if the inner code returns a plain object.In this cases we need middleware.