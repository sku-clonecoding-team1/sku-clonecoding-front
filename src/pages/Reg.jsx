/* eslint-disable react-hooks/exhaustive-deps */
import React, {
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Movie from "../component/Reg/Movie";
import Day from "../component/Reg/Day";
import Time from "../component/Reg/Time";
import Room from "../component/Reg/Room";

const Reg = () => {
	const Ltoken = localStorage.getItem("token");
	const [selectedData, setSelectedData] = useState({
		movie: "",
		poster_path: "",
		theater: "",
		locationDetail: "",
		date: "",
	});

	// const RegBtn = useRef(null);

	// useEffect(() => {
	// 	if (RegBtn) {
	// 		RegBtn.current.click(); // 클릭 이벤트 트리거
	// 	}
	// }, []);

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
				"http://localhost:8080/getMovieSchedule",
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				},
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
				"http://localhost:8080/getMovieScheduleAll",
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
			<div className='bg-[#1D1D1C] flex items-center px-[250px] w-full h-[128px]'>
				<div className='h-full text-[white] flex justify-center items-center text-[12px] py-[20px]'>
					<div className='w-[212px] flex flex-col items-start justify-start px-[30px]'>
						{selectedData.movie ? (
							<div className='flex'>
								<img
									className=' w-[74px] h-[104px] drop-shadow-2xl'
									src={`https://image.tmdb.org/t/p/w500${selectedData.poster_path}`} // poster_path를 사용
									alt={selectedData.movie}
									style={{maxWidth: "100%"}}
								/>
								{selectedData.movie}
							</div>
						) : (
							<img
								className='w-[100px]'
								src='img/reg/Reg_steps1.png'
								alt=''
							/>
						)}
					</div>
					{selectedData.locationDetail ||
					selectedData.date ||
					selectedData.theater ? (
						<div className='w-[212px] flex flex-col items-start justify-start border-solid-[1px] border-[#2D2D2B] px-[30px]'>
							{selectedData.locationDetail ? (
								<span>
									극장 CGV {selectedData.locationDetail}
								</span>
							) : (
								<span>
									극장 {selectedData.locationDetail}
								</span>
							)}
							<span>일시 {selectedData.date}</span>
							<span>상영관 </span>
							<span>인원</span>
						</div>
					) : (
						<img
							className='w-[100px]'
							src='img/reg/Reg_steps2.png'
							alt=''
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Reg;
