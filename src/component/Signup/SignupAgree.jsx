import React from "react";
import {list} from "../../constants/Signup_CheckList";
const SignupAgree = () => {
	return (
		<div className='Mobile'>
			<div className='flex flex-col justify-center my-[70px]'>
				<ul className='grid grid-cols-2 font-bold text-center'>
					<li className='text-[#666666] border-b-[2px] border-[#666666] pb-[10px]'>
						STEP 1. 약관동의
					</li>
					<li className='text-[#fb4357] border-b-[2px] border-[#fb4357] pb-[10px]'>
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
			</div>
		</div>
	);
};

export default SignupAgree;
