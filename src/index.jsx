import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/index.css";
import "./css/font.css";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<BrowserRouter>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</BrowserRouter>
);
