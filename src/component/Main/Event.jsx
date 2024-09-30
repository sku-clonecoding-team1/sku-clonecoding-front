import React, {useState} from "react";

const Event = () => {
	const banner = [
		{
			id: "1",
			title: "멋쟁이 사자처럼 12기를 아시나요?",
			date: "2024.09.26~2024.10.09",
		},
		{
			id: "2",
			title: "아주 ~~ 멋진 동아리입니다",
			date: "2024.09.26~2024.10.09",
		},
		{
			id: "3",
			title: "저희 1조도 아주 멋집니다!!",
			date: "2024.09.26~2024.10.09",
		},
	];
	return (
		<div className='pt-[60px] px-[280px] pb-[6px]'>
			<div className='flex items-center justify-between mb-[20px]'>
				<div className='text-[#222] text-[26px] font-bold'>
					Event
				</div>
				<div className='flex'>
					<div className='border-[1px] border-[#e2e2e2] p-[15px] rounded-[100px] mr-[10px] cursor-pointer'></div>
					<div className='text-[14px] py-[4px] pr-[32px] pl-[15px] cursor-pointer border-[1px] border-[#e2e2e2] rounded-[15px] drop-shadow-2xl cursor-pointer'>
						전체보기
					</div>
				</div>
			</div>
			<div className='grid grid-cols-3'>
				{banner.map((m, index) => {
					return (
						<div className='flex flex-col font-semibold'>
							<div
								key='index'
								className='w-[310px] h-[207px] bg-[black] rounded-[10px]'
							>
								<img className='' alt='' />
							</div>
							<div className='text-[18px] text-[#222] mt-[16px]'>
								{m.title}
							</div>
							<div className='text-[14px] text-[#666] mt-[4px]'>
								{m.date}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Event;
