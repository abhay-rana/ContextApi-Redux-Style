import React, { useContext } from "react";
import { store } from "./context";
import { IncreaseAction, GetDetails, DecreaseFunction } from "./Actions";

const App = () => {
	const { state, dispatch } = useContext(store);

	return (
		<div>
			Counter:{state.counter}
			<button onClick={() => IncreaseAction(dispatch)}>Increase the counter</button>
			<button onClick={() => DecreaseFunction(dispatch)}>Decrease The Counter</button>
			<button onClick={() => GetDetails(dispatch)}>Get USerD</button>
			{state.user ? <>{state.user}</> : null}
		</div>
	);
};

export default App;
