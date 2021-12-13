export function IncreaseAction(dispatch) {
	// return {
	// 	type: "INCREMENT",
	// };
	dispatch({ type: "INCREMENT" });
}
export function DecreaseFunction(dispatch) {
	dispatch({ type: "DECREMENT" });
}
export async function GetDetails(dispatch) {
	const res = await fetch("https://api.github.com/users/abhay-rana");
	const data = await res.json();
	console.log(data.login, "action");
	return dispatch({ type: "GETDETAILS", data: data.login });
}

export function SetDetails(dispatch, name) {
	dispatch({
		type: "SETNAME",
		data: name,
	});
}
