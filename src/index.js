import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StoreProvider, { ThemeProvider } from "./context/index";
import MemoComponent from "./MemoComponent";

ReactDOM.render(
	<>
		<StoreProvider>
			<ThemeProvider>
				<App />
				<MemoComponent />
			</ThemeProvider>
		</StoreProvider>
	</>,
	document.getElementById("root")
);
