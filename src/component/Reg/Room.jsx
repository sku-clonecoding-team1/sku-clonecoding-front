import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {loacation} from "../../constants/Location";
const Room = ({onSelect}) => {
	const [movies, setMovies] = useState([]); // 배열로 초기화
	const [activeBtn, setActiveBtn] = useState(0);
	// autofoucs 속성 적용하기 (서울극장 포커스하기)
	const firstButtonRef = useRef(null); // 첫번째 버튼에 대한 ref 생성
	useEffect(() => {
		if (firstButtonRef.current) {
			// firstButtonRef.current.focus(); // 첫번째 버튼에 포커스 주기
			firstButtonRef.current.click(); // 클릭 이벤트 트리거
		}
	}, []);
	const handleClick = (buttonId) => {
		// 첫 번째 버튼(서울)만 초기 활성화 상태로 남기고, 이후에는 상태 업데이트 안함
		if (activeBtn !== 0 || buttonId !== 0) {
			setActiveBtn(buttonId); // 클릭된 버튼의 인덱스를 설정하여 상태 관리
		}
		onSelect("room", loacation[buttonId].locationName); // 선택한 극장 데이터 전달
	};
	const [locationNum, setLocationNum] = useState(null);
	const [locationDetail, setLocationDetail] = useState([]);
	function getNumber(num) {
		setLocationNum(num);
	}
	function getDetailTheater(theater) {
		setLocationDetail(theater);
	}
	useEffect(() => {
		console.log("locationDetail: ", locationDetail);
	}, [locationDetail]);
	return (
		<>
			{/* 극장 */}
			<div className='grid-item a bg-[#F2F0E5] border-x-[1px] border-[#D4D3C9]'>
				<div className='bg-[#333333] text-white w-full py-[10px]'>
					극장
				</div>
				<div className='m-[20px]'>
					{/* 전체, 아트하우스, 특별관 */}
					<div className='flex flex-row items-center justify-center w-fit mb-[3px]'>
						<div className='flex items-center justify-center w-[58px] h-[28px] border-x-[2px] border-t-[2px] border-[#252526]'>
							<button>전체</button>
						</div>
						<div className='flex items-center justify-center w-[90px] h-[28px] border-b-[2px] border-b-[#252526] border-t-[#AAA9A0] border-t-[2px] border-r-[2px] border-r-[#AAA9A0]'>
							<button>아트하우스</button>
							{/* 다른 옵션들 */}
						</div>
						<form className='flex items-center justify-center w-[88px] h-[28px] border-b-[2px] border-b-[#252526] border-t-[#AAA9A0] border-t-[2px] border-r-[2px] border-r-[#AAA9A0]'>
							<button>특별관</button>
							{/* 다른 옵션들 */}
						</form>
					</div>
				</div>
				{/* 지역선택 버튼 */}
				<div className='ticketBox flex flex-row h-[410px] text-[12px]'>
					<div>
						{loacation.map((d, i) => (
							<div
								className='flex flex-col w-[109px]'
								key={i}
							>
								<div
									onClick={() => {
										handleClick(i);
										getNumber(i);
									}}
									className={`nanum-r location bg-[#E6E4D9] flex items-center justify-end cursor-pointer m-[1px] px-[5px] py-[6px] ${
										activeBtn === i ? "bg-[#f2f0e5]" : "" // 클릭된 버튼은 색상이 바뀜
									}`}
									ref={i === 0 ? firstButtonRef : null} // 첫번째 버튼에 ref를 적용
									tabIndex={-1} // 탭 순서에서 제외
								>
									{d.locationName}
								</div>
							</div>
						))}
					</div>
					<div>
						{loacation.map((m, i) => {
							if (locationNum === i) {
								return (
									<div
										className='scroll-box flex flex-col items-start w-[114px] h-[450px] overflow-x-hidden'
										key={i}
									>
										{m.list.map((d, i) => (
											<div
												key={i}
												className='regbtn flex justify-center truncate nanum-b min-h-[30px] text-start text-[12px] px-[5px] py-[6px] m-[1px] text-[#333333] font-bold cursor-pointer'
												tabIndex='0'
												onClick={() => {
													getDetailTheater(i + 1);
													onSelect("locationDetail", d);
												}}
											>
												{d}
											</div>
										))}
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default Room;
