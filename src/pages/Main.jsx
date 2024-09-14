import React from "react";
import {NavLink} from "react-router-dom";
import "../constants/Hidden";
import Movieinfo from "../component/Movieinfo/Movieinfo";

const Main = () => {
	return (
		<>
			<div className='px-[200px]'>
				{/* main header */}
				<div className='flex justify-between items-end border-b-[2px] border-[#222] pt-[30px] pb-[20px]'>
					<span className='text-[36px] text-[#222] font-semibold'>
						무비차트
					</span>
					<div className='flex justify-center font-semibold'>
						<NavLink
							to=''
							className='flex justify-center items-center px-[13px]'
						>
							<img
								className='w-fit h-fit pr-[5px]'
								src='img/main/Mainheaderplay.png'
								alt=''
							/>
							<span className='text-[#fb4357]'>
								무비차트
							</span>
						</NavLink>
						<NavLink className='flex justify-center items-center px-[13px]'>
							<img
								id='hidden'
								className='look w-fit h-fit pr-[5px]'
								src='img/main/Mainheaderplay.png'
								alt=''
							/>
							<span className='text-[#666]'>
								상영예상작
							</span>
						</NavLink>
					</div>
				</div>
				{/* 조건검색 header */}
				<div className='flex justify-between items-center px-[5px] pt-[25px] pb-[20px]'>
					<div className='flex'>
						<input type='checkbox' />
						<span className='text-[15px] text-[#666] ml-[5px]'>
							현재 상영작만 보기
						</span>
					</div>
					<form>
						<select
							className='border-[1px] border-[#b4b3aa] bg-white px-[6px] py-[4px] mr-[2px]'
							name=''
							id=''
						>
							<option value=''>예매율순</option>
							<option value=''>평점순</option>
							<option value=''>관람객순</option>
						</select>
						<input
							type='submit'
							value='Go'
							className='border-[1px] border-[#b4b3aa] bg-white px-[6px] py-[4px] ml-[2px]'
						/>
					</form>
				</div>
				{/* !! Movie Info !!🚨🚨 */}
				<div>
					<Movieinfo />
				</div>
			</div>
		</>
	);
};

export default Main;
