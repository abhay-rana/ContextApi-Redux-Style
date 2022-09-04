import { createContext, useReducer } from "react";

export const Theme_Context = createContext();

const ThemeProvider = (props) => {
	const theme_state = {
		mode: "light",
	};
	const [state, setTheme] = useState(theme_state);
	return <Theme_Context.Provider value={{ state, setTheme }}>{props.children}</Theme_Context.Provider>;
};

export default ThemeProvider;