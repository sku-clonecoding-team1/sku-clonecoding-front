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
import SKU from "./pages/SKU";
import Theater from "./pages/Theater";

function App() {
	return (
		<>
			<div className='App Noto'>
				<Header />
				<Nav />
				<Routes>
					{/* 로그인, 회원가입 */}
					<Route path='/Login' element={<Login />} />
					<Route path='/Signup' element={<Signup />} />
					{/* 극장찾기 */}
					<Route path='/Main' element={<Main />} />
					<Route
						path='/Moviedetail'
						element={<MovieDetail />}
					/>
					{/* 예매하기 */}
					<Route path='/Reg' element={<Reg />} />
					{/* 찐메인 */}
					<Route path='/' element={<SKU />} />
					{/* 극장 */}
					<Route path='Theater' element={<Theater />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
