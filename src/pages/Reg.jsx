import React from "react";
import Movie from "../component/Reg/Movie";

const Reg = () => {
	return (
		<>
			<div className='ticket grid text-center gap-[3px] px-[200px]'>
				{/* 영화 */}
				<Movie />
				{/* 극장 */}
				<div className='relative grid-item b bg-[#F2F0E5] py-[300px]'>
					<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
						영화
					</div>
				</div>
				{/* 날짜 */}
				<div className='relative grid-item c bg-[#F2F0E5] py-[300px]'>
					<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
						영화
					</div>
				</div>
				{/* 시간 */}
				<div className='relative grid-item bg-[#F2F0E5] py-[300px]'>
					<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
						영화
					</div>
				</div>
			</div>
		</>
	);
};

export default Reg;
