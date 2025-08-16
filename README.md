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