import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignupInfo = () => {
	const navigate = useNavigate();

	const [userinputs, setUserInputs] = useState({
		name: "",
		birthDate: "",
		id: "",
		password: "",
		email: "",
	});

	const password2 = "";

	const handleChange = (e) => {
		const {name, value} = e.target;
		const {password2} = e.target;
		setUserInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	};

	return (
		<div className='Mobile'>
			<div className='flex flex-col justify-center my-[70px]'>
				<ul className='grid grid-cols-2 font-bold text-center'>
					<li className='text-[#666666] border-b-[2px] border-[#E4E6EB] pb-[10px]'>
						STEP 1. 약관동의
					</li>
					<li className='text-[#2D6FFF] border-b-[2px] border-[#2D6FFF] pb-[10px]'>
						STEP 2. 정보입력
					</li>
				</ul>
				<div className='flex flex-col my-[20px]'>
					<span className='text-[24px] font-semibold'>
						안녕하세요.
					</span>
					<span className='text-[17px] text-[#666666] font-medium'>
						회원정보를 입력해주세요.
					</span>
				</div>
				<form action='' className=''>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>이름</label>
						<input
							value={userinputs.name}
							name='name'
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='이름'
							type='text'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>생년월일</label>
						<input
							value={userinputs.birthDate}
							name='birthDate'
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							type='date'
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>아이디</label>
						<input
							value={userinputs.id}
							name='id'
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='아이디'
							type='text'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>비밀번호</label>
						<input
							value={userinputs.password}
							name='password'
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='비밀번호'
							type='password'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>
							비밀번호 확인
						</label>
						<input
							value={password2}
							name='password2'
							onChange={handleChange}
							className='w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[5px]'
							placeholder='비밀번호'
							type='password'
							required
						/>
					</div>
					<div className='flex flex-col items-start'>
						<label className='text-[13px]'>이메일</label>
						<div className='flex justify-between w-full bg-[#f9fafb] border-[1px] border-[#c2c8cf] rounded-[10px] mt-[12px] mb-[30px] px-[16px] py-[8px]'>
							<input
								value={userinputs.email}
								name='email'
								onChange={handleChange}
								className='bg-[#f9fafb]'
								placeholder='이메일'
								type='email'
								required
							/>
							<button>이메일 인증</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignupInfo;
