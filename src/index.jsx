import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import React from "react";
import App from "./App";
import {createRoot} from "react-dom/client"; // 수정된 부분
import "./css/index.css";
import "./css/font.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot는 react-dom/client에서 가져옴
root.render(
	<BrowserRouter>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</BrowserRouter>
);
