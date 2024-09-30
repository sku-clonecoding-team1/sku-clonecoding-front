import React from "react";

const Special = () => {
	const specialot = [
		{
			id: "1",
			src: "",
			title: "SUITE CINEMA",
			content: "#호텔 컨셉의 프리미엄관",
		},
		{
			id: "2",
			src: "",
			title: "CINE & LIVINGROOM",
			content: "#신개념 소셜 상영관",
		},
		{
			id: "3",
			src: "",
			title: "4DX",
			content: "#모션시트 #오감체험",
		},
		{
			id: "4",
			src: "",
			title: "CINE de CHEF",
			content: "#쉐프가 있는 영화관",
		},
	];

	return (
		<div className='pt-[60px] px-[280px]'>
			<div className='flex items-center justify-between mb-[20px]'>
				<div className='text-[#222] text-[26px] font-bold'>
					특별관
				</div>
				<div className='flex'>
					<div className='text-[14px] py-[4px] pr-[32px] pl-[15px] cursor-pointer border-[1px] border-[#e2e2e2] rounded-[15px] drop-shadow-2xl cursor-pointer'>
						전체보기
					</div>
				</div>
			</div>
			<div className='flex justify-between mt-[19px]'>
				<div className='w-[500px] h-[262px] bg-[black] rounded-[10px]'></div>
				<div className='grid grid-rows-4 gap-[1px] gap-[black]'>
					{specialot.map((s, id) => {
						return (
							<div
								key='id'
								className='flex justify-between items-center pt-[19px] pr-[25px] pb-[19px] pl-[19px]'
							>
								<div className='text-[18px] font-semibold'>
									{s.title}
								</div>
								<div className='text-[14px] bg-[#f6f6f6] text-[#666] py-[2px] px-[7px] font-normal'>
									{s.content}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Special;
