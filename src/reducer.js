export const initialState = {
	user: "",
	counter: 0,
	name: "",
};

export function reducer(state = initialState, action) {
	let newState = Object.assign({}, state);
	if (action.type === "INCREMENT") {
		newState = { ...newState, counter: newState.counter + 1 };
		console.log(state, "old state");
		console.log(newState, "new State");
		return newState;
	}
	if (action.type === "DECREMENT") {
		newState = { ...newState, counter: newState.counter - 1 };
		return newState;
	}
	if (action.type === "GETDETAILS") {
		newState = { ...newState, user: action.data };
		console.log(newState);
		return newState;
	}
	if (action.type === "SETNAME") {
		newState = { ...newState, name: action.data };
		console.log(newState);
		return newState;
	}
	return state;
}
