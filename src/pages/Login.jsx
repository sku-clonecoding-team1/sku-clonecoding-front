import React, {useState, useEffect} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [cookies, setCookies] = useCookies(["token"]);
	const [pwValid, setPWValid] = useState(false);
	const [idValid, setIDValid] = useState(false);
	const [notAllow, setNotAllow] = useState(true);

	//버튼 비활성화 disabled
	useEffect(() => {
		if (idValid && pwValid) {
			setNotAllow(false);
			return;
		}
		setNotAllow(true);
	}, [idValid, pwValid]);

	// confirm 메시지 만들기 (회원가입 XMLDocument 경고)
	// const confirmMessage = () => {
	// 	if(id === )
	// }

	const [logininputs, setLoginInputs] = useState({
		id: "",
		password: "",
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setLoginInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	};

	// id, password post
	const loginSubmit = async (e) => {
		e.preventDefault(); // 폼 기본 동작 막기
		if (!logininputs.id || !logininputs.password) {
			alert("아이디와 비밀번호를 입력해주세요.");
			return;
		}
		try {
			const response = await axios.post(
				`http://localhost:8080/logIn`,
				{
					header: {
						Authorization: `Bearer ${cookies.token}`,
					},
				},
				logininputs
			);
			console.log("백엔드 응답:", response);
			if (response.status === 200 && response.data) {
				localStorage.setItem("token", response.data);
				navigate("/Main");
			} else {
				alert(
					"로그인 실패" +
						(response.data.message || "토큰이 없습니다.")
				);
			}
		} catch (error) {
			console.error("오류: ", error);
			alert(
				"로그인 실패" +
					(error.response
						? error.response.data.message
						: error.message)
			);
		}
	};

	return (
		<div className='Mobile'>
			<div className='flex flex-col justify-center my-[70px]'>
				<div className='bg-[#2D6FFF] text-[white] rounded-t-[10px] px-[30px] py-[10px] font-semibold'>
					로그인
				</div>
				<div className='flex flex-col border-y-[2px] border-[#2D6FFF]'>
					<form
						onSubmit={loginSubmit}
						className='my-[50px]'
					>
						<input
							name='id'
							value={logininputs.id}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] px-[16px] py-[5px] my-[6px]'
							placeholder='아이디를 입력해주세요.'
							type='text'
							required
						/>
						<input
							name='password'
							value={logininputs.password}
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] px-[16px] py-[5px] my-[6px]'
							placeholder='비밀번호를 입력해주세요.'
							type='text'
							required
						/>
						<button
							disabled={notAllow}
							className='w-full text-white flex items-center justify-center rounded-[10px] bg-[#FB2F45] px-[16px] py-[7px] my-[9px] font-medium drop-shadow-sm disabled:bg-[#F0F0F0] disabled:text-[black] disabled:drop-shadow-sm'
							type='submit'
						>
							로그인
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
