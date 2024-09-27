/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Movie from "../component/Reg/Movie";
import Day from "../component/Reg/Day";
import Time from "../component/Reg/Time";
import Room from "../component/Reg/Room";

const Reg = () => {
	const [selectedData, setSelectedData] = useState({
		movie: "",
		theater: "",
		locationDetail: "",
		date: "",
	});

	const {movie, locationDetail, date, theater} =
		selectedData;

	function setData(sort, data) {
		console.log(sort, data);
		setSelectedData((prev) => ({
			...prev,
			[sort]: data,
		}));
	}

	const handleBooking = async () => {
		try {
			const response = await axios.post(
				"백엔드_엔드포인트",
				{
					movie,
					locationDetail,
					date,
				}
			);
			// setSchedule(response.data.schedule);
		} catch (error) {
			console.error("Error fetching schedule:", error);
		}
	};

	const getTheater = async () => {
		try {
			const response = await axios.get(
				"백엔드_엔드포인트",
				{
					theater,
				}
			);
			console.log(response);
		} catch (error) {
			console.error("Error fetching schedule:", error);
		}
	};

	useEffect(() => {
		if (
			movie.length > 0 &&
			locationDetail.length > 0 &&
			date.length > 0
		) {
			handleBooking();
		}
	}, [movie, locationDetail, date]);

	return (
		<>
			<div className='px-[250px] text-[12px]'>
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
				<div className='ticket text-center h-[565px]'>
					<Movie onSelect={setData} />
					<Room onSelect={setData} />
					<Day onSelect={setData} />
					<Time />
				</div>
			</div>
			<div className='bg-[#1D1D1C] w-full h-[128px]'>
				<div className='flex items-center px-[250px]'>
					<div className='w-[212px] h-full text-[white] flex justify-center items-center'>
						<div>
							<span>영화선택</span>
							{selectedData.movie}
						</div>
						<div>{selectedData.locationDetail}</div>
						<div>{selectedData.date}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reg;
