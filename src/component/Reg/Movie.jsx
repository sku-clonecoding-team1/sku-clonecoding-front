import React from "react";

const Movie = () => {
	return (
		<>
			{/* 영화 */}
			<div className='relative flex flex-col items-start grid-item a bg-[#F2F0E5] py-[300px]'>
				<div className='absolute bg-[#333333] text-white w-full py-[15px] top-[0px]'>
					영화
				</div>
				{/* 전체, 아트하우스, 특별관 */}
				<div className='top-nav flex m-[15px]'>
					<div>
						<div>전체</div>
					</div>
					<form>
						<select className='' name='' id=''>
							<option value=''>아트하우스</option>
							<option value=''>전체</option>
							<option value=''>최신작</option>
							<option value=''>STAGE</option>
							<option value=''>영시봉 상영회</option>
							<option value=''>가을밤 날아온</option>
							<option value=''>프리미어DAY</option>
						</select>
					</form>
					<form>
						<select className='' name='' id=''>
							<option value=''>특별관</option>
							<option value=''>전체</option>
							<option value=''>IMAX</option>
							<option value=''>4DX</option>
							<option value=''>SCREENX</option>
							<option value=''>PRIVATE BOX</option>
							<option value=''>SUITE CINEMA</option>
						</select>
					</form>
				</div>
				{/* 예매율순, 가나다순 버튼 */}
				<div className='flex justify-start'>
					<div className='cursion-pointer'>예매율순</div>
					<div>가나다순</div>
				</div>
			</div>
		</>
	);
};

export default Movie;
