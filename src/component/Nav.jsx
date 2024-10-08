import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {CiSearch} from "react-icons/ci";

export default function Nav() {
	const navigate = useNavigate();

	const handleNavClick = (path) => {
		navigate(path);
	};

	return (
		<>
			<div className='text-[16px] text-[#222] font-semibold flex flex-row justify-between items-center border-b-[3px] border-[#fb4357] px-[250px] py-[15px]'>
				<ul className='flex'>
					<li
						onClick={() => handleNavClick("/Main")}
						className='cursor-pointer pr-[60px]'
					>
						영화
					</li>
					<li
						onClick={() => handleNavClick("/Theater")}
						className='cursor-pointer pr-[60px]'
					>
						극장
					</li>
					<li
						onClick={() => handleNavClick("/Reg")}
						className='text-[#fb4357] cursor-pointer pr-[60px]'
					>
						예매
					</li>
					{/* <li
						onClick={() => handleNavClick("/")}
						className='text-[16px] text-[#222] font-semibold cursor-pointer pr-[60px]'
					>
						스토어
					</li>
					<li
						onClick={() => handleNavClick("/")}
						className='text-[16px] text-[#222] font-semibold cursor-pointer pr-[60px]'
					>
						이벤트
					</li>
					<li
						onClick={() => handleNavClick("/")}
						className='text-[16px] text-[#222] font-semibold cursor-pointer pr-[60px]'
					>
						혜택
					</li> */}
				</ul>
				<div className='flex items-center'>
					<div className='w-[1px] h-[20px] bg-[#cacaca] mx-[8px]'></div>
					{/* 이거 focus했을때 border 색상 바뀌는거 되면 하깅 */}
					<input
						type='text'
						placeholder='클론코딩 1팀 파이팅💪🏻'
						className='text-[16px] font-light active:border-[1px] acitve:border-[#FB2F45]'
					/>
					<CiSearch size={26} className='mx-[5px]' />
					<div className='w-[1px] h-[20px] bg-[#cacaca] mx-[8px]'></div>
				</div>
			</div>
		</>
	);
}
