import React from "react";
import Movie from "../component/Reg/Movie";

const Reg = () => {
	return (
		<div className=' px-[200px]'>
			<div className='flex justify-end mt-[40px] mb-[20px]'>
				<div className='flex items-center justify-center bg-[#F2F0E5] border-[2px] text-[#333333] text-[13px] border-[#333333] py-[3px] px-[10px] rounded-[5px] font-semibold mx-[5px]'>
					ENGLISH
				</div>
				<div className='flex items-center justify-center bg-[#F2F0E5] border-[2px] text-[#333333] text-[13px]  border-[#333333] py-[3px] px-[10px] rounded-[5px] font-semibold mx-[5px]'>
					상영시간표
				</div>
				<div className='flex items-center justify-center bg-[#F2F0E5] border-[2px] text-[#333333] text-[13px]  border-[#333333] py-[3px] px-[10px] rounded-[5px] font-semibold mx-[5px]'>
					예매 다시하기
				</div>
			</div>
			<div className='ticket bg-[#D2D1C7] text-center gap-[3px]'>
				{/* 영화 */}
				<Movie />
				{/* 극장 */}
				<div className='relative grid-item b bg-[#F2F0E5] py-[300px]'>
					<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
						극장
					</div>
				</div>
				{/* 날짜 */}
				<div className='relative grid-item c bg-[#F2F0E5] py-[300px]'>
					<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
						날짜
					</div>
				</div>
				{/* 시간 */}
				<div className='relative grid-item bg-[#F2F0E5] py-[300px]'>
					<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
						시간
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reg;
