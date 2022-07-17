import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
export const store_context = createContext();
export const theme_context = createContext();

export default function StoreProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <store_context.Provider value={{ state, dispatch }}>{props.children}</store_context.Provider>;
}

export const ThemeProvider = (props) => {
	const theme_state = {
		mode: "light",
	};
	const [state, setTheme] = useState(theme_state);
	return <theme_context.Provider value={{ state, setTheme }}>{props.children}</theme_context.Provider>;
};
