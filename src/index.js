import React from "react";
import ReactDOM from "react-dom";
import StoreProvider from "./providers/store-provider";
import ThemeProvider from "./providers/theme-provider";

import App from "./App";
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
