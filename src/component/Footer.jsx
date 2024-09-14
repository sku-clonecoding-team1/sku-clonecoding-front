import React from "react";

const Footer = () => {
	return (
		<>
			<div className='Noto flex flex-col items-center justify-cneter bg-white w-full h-full py-[20px] border-[#eee] border-t-[1px] text-[#838691]'>
				<div className='flex flex-col items-center text-[13px] mb-[10px]'>
					<span className='font-bold'>
						@ 2024 SKU LIKELION CloneCoding Team 1.
					</span>
					<span className=''>All rights reserved.</span>
				</div>
				<div className='text-[13px] flex'>
					<span>
						<b className='text-[#2D6FFF]'>Frontend</b>&nbsp;
						노은아
					</span>
					&nbsp;&nbsp;
					<span>
						<b className='text-[#2D6FFF]'>Backend</b>&nbsp;
						유진영, 황성윤
					</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
