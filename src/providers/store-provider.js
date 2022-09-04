import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const Store_Context = createContext();


export default function StoreProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <Store_Context.Provider value={{ state, dispatch }}>{props.children}</Store_Context.Provider>;
}

