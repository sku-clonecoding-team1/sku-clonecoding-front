/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {days} from "../../constants/Days";

const Day = ({onSelect}) => {
	const [list, setList] = useState([]);
	const today = new Date();

	const year = today.getFullYear();
	const month = today.getMonth();
	const date = today.getDate();

	function createDay() {
		const newList = [];
		let currentDate = new Date(year, month, date); // 시작 날짜 설정

		for (let i = 0; i < 20; i++) {
			const nextDate = currentDate.getDate(); // 일
			const nextMonth = currentDate.getMonth() + 1; // 월 (0부터 시작하므로 +1)
			const nextYear = currentDate.getFullYear(); // 연도
			const nextDay = currentDate.getDay(); // 요일

			newList.push({
				date: nextDate,
				day: days[nextDay],
				month: nextMonth,
				year: nextYear,
			});

			// 하루 더하기 (자동으로 월, 연도가 넘어감)
			currentDate.setDate(currentDate.getDate() + 1);
		}

		setList(newList); // state에 리스트 저장
	}

	useEffect(() => {
		createDay();
	}, []);

	//콘솔 확인 날짜 리스트
	// useEffect(() => {
	// 	console.log("list: ", list);
	// }, [list]);

	return (
		<>
			{/* 날짜 */}
			<div className='grid-item a bg-[#F2F0E5] border-x-[1px] border-[#D4D3C9]'>
				<div className='bg-[#333333] text-white w-full py-[10px]'>
					날짜
				</div>
				<div className='ticketBox scroll-box flex flex-col h-[480px]'>
					{list.length > 0 &&
						list.map((l, i) => (
							<div
								key={i}
								className='flex flex-col items-center'
							>
								{/* 연도와 월 표시 */}
								{i === 0 ||
								(i > 0 && list[i - 1].month !== l.month) ? (
									<div
										className='flex flex-col items-center'
										onClick={() => onSelect("date", l)}
									>
										<span className='text-[#666] text-[11px]'>
											{l.year}
										</span>
										<span className='text-[#666] text-[30px]'>
											{l.month}
										</span>
									</div>
								) : null}

								{/* 날짜와 요일 표시 */}
								<div
									className='flex items-center px-[8px] text-[14px] text-[#333] py-[10px]'
									onClick={() =>
										onSelect("date", `${l.date}/${l.day}`)
									}
								>
									<span>{l.day}</span>
									<span>{l.date}</span>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default Day;
