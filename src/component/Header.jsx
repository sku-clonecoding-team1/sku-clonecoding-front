import React, {useState, useEffect} from "react";
import {Banner} from "../constants/HeaderInfo.js";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const Ltoken = localStorage.getItem("token");

	const handleNavClick = (path) => {
		navigate(path);
	};

	const [randomBannerSrc, setRandomBannerSrc] =
		useState("");

	useEffect(() => {
		const getRandomBanner = () => {
			const randomIndex = Math.floor(
				Math.random() * Banner.length
			);
			return Banner[randomIndex].src;
		};
		setRandomBannerSrc(getRandomBanner());
	}, []); // 빈 배열로 설정하면 컴포넌트가 처음 렌더링될 때만 실행

	return (
		<>
			<div className=''>
				<div className='flex justify-center bg-black px-[200px]'>
					<img
						className='w-full h-fit'
						src={randomBannerSrc}
						alt='Banner'
					/>
				</div>
				<div className='flex flex-row justify-between items-center border-b-[1px] border-[#eee] pt-[30px] pb-[25px] px-[200px]'>
					<div className='flex items-end'>
						<Link to='/Main'>
							<img
								className='w-[120px]'
								src='img/header/CGVlogo.png'
								alt=''
							/>
						</Link>
						<span className='text-[#222] text-[16px] font-light tracking-[0.4em]'>
							SKU MOVIE SPACE
						</span>
					</div>
					<div className='flex items-center flex-nowrap'>
						<Link to='#'>
							<img
								src='img/header/Hyundailogo.png'
								alt=''
							/>
						</Link>
						{/* 로그인 */}
						<div
							onClick={() => handleNavClick("/Login")}
							className='flex flex-col items-center justify-center cursor-pointer ml-[44px]'
						>
							<img
								className='w-[36px]'
								src='img/header/Login.png'
								alt=''
							/>
							<span className='text-[13px] text-[#666666]'>
								로그인
							</span>
						</div>
						{/* 회원가입 */}
						<div
							onClick={() => handleNavClick("/Signup")}
							className='flex flex-col items-center justify-center cursor-pointer  ml-[44px]'
						>
							<img
								className='w-[36px]'
								src='img/header/Signup.png'
								alt=''
							/>
							<span className='text-[13px] text-[#666666]'>
								회원가입
							</span>
						</div>
						{/* 마이 CGV */}
						<div
							onClick={() => handleNavClick("/Signup")}
							className='flex flex-col items-center justify-center cursor-pointer ml-[44px]'
						>
							<img
								className='w-[36px]'
								src='img/header/Mypage.png'
								alt=''
							/>
							<span className='text-[13px] text-[#666666]'>
								My CGV
							</span>
						</div>
						{/* 고객센터 */}
						<div
							onClick={() => handleNavClick("/Signup")}
							className='flex flex-col items-center justify-center cursor-pointer ml-[44px]'
						>
							<img
								className='w-[36px]'
								src='img/header/Customer.png'
								alt=''
							/>
							<span className='text-[13px] text-[#666666]'>
								고객센터
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
