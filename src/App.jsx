import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Footer from "./component/Footer";
import MovieDetail from "./pages/Moviedetail";
import Reg from "./pages/Reg";

function App() {
	return (
		<>
			<div className='App Noto'>
				<Header />
				<Nav />
				<Routes>
					<Route path='/Login' element={<Login />} />
					<Route path='/Signup' element={<Signup />} />
					<Route path='/Main' element={<Main />} />
					<Route
						path='/Moviedetail'
						element={<MovieDetail />}
					/>
					<Route path='/Reg' element={<Reg />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
