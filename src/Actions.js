export const IncreaseAction = (dispatch) => dispatch({ type: "INCREMENT" });
export const DecreaseFunction = (dispatch) => dispatch({ type: "DECREMENT" });
export const GetDetails = async (dispatch) => {
	const res = await fetch("https://api.github.com/users/abhay-rana");
	const data = await res.json();
	console.log(data.login, "action");
	return dispatch({ type: "GETDETAILS", data: data.login });
};

export const SetDetails = (dispatch, name) =>
	dispatch({
		type: "SETNAME",
		data: name,
	});
