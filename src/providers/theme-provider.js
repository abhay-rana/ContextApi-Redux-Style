import { createContext, useReducer } from "react";

export const Theme_Context = createContext();

// context consumer hook
export const useTheme = () => {
	// get the context
	const context = useContext(Theme_Context);

	// if `undefined`, throw an error
	if (context === undefined) {
		throw new Error("useTheme was used outside of its Provider");
	}

	return context;
};


const ThemeProvider = ({children}) => {
	const theme_state = {
		mode: "light",
	};
	const [state, setTheme] = useState(theme_state);
	return <Theme_Context.Provider value={{ state, setTheme }}>{children}</Theme_Context.Provider>;
};

export default ThemeProvider;