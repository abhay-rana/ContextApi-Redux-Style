import React, { useContext } from "react";
import { store } from "./context";
import { IncreaseAction, GetDetails, DecreaseFunction } from "./Actions";

const App = () => {
	const { state, dispatch } = useContext(store);

	const increaseAction = () => IncreaseAction(dispatch);
	const getDetails = useCallback(() => GetDetails(dispatch), []);

	return (
		<div>
			Counter:{state.counter}
			<button onClick={increaseAction}>Increase the counter</button>
			<button onClick={() => DecreaseFunction(dispatch)}>Decrease The Counter</button>
			<button onClick={getDetails}>Get USerD</button>
			{state.user ? <>{state.user}</> : null}
		</div>
	);
};

export default App;
