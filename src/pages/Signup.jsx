import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SignupAgree from "../component/Signup/SignupAgree";
import SignupInfo from "./../component/Signup/SignupInfo";

const Signup = () => {
	return (
		<>
			<div>
				<SignupAgree />
				<SignupInfo />
			</div>
		</>
	);
};

export default Signup;
