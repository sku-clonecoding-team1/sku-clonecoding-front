import React from "react";

const Time = ({theater}) => {
	return (
		<>
			{/* 시간 */}
			<div className='grid-item a bg-[#F2F0E5] border-r-[3px] border-l-[1px] border-[#D4D3C9]'>
				<div className='bg-[#333333] text-white w-full py-[10px]'>
					시간
				</div>
				<div className='m-[20px]'>
					{/* {theater ? (
						<div>
							영화, 극장, 날짜를 선택해주세요.
						</div>
					): (

					)} */}
				</div>
			</div>
		</>
	);
};

export default Time;
