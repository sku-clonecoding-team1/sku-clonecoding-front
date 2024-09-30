import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const MovieChart = () => {
	const [movies, setMovies] = useState([]); // 배열로 초기화
	const [displayCount, setDisplayCount] = useState(5);

	const loadMoreMovies = () => {
		setDisplayCount((prevCount) => prevCount + 5);
	};

	const FetchMovies = async () => {
		try {
			const response = await axios.get(
				"http://localhost:8080/getMoviePage/1"
			);
			if (response.status === 200) {
				setMovies(response.data.results || response.data); // 영화 데이터를 배열로 설정
				console.log("data get:", response.data);
			} else {
				console.error(
					"조건이 충족되지 않음",
					response.data
				);
			}
		} catch (error) {
			console.log("오류", error);
			console.log("실패");
		}
	};

	useEffect(() => {
		FetchMovies(); // 컴포넌트가 마운트될 때 영화 데이터 가져오기
	}, []);

	return (
		<div className='px-[144px] pt-[50px] px-[280px] pb-[60px] bg-[#F8F8F8]'>
			<div className='flex items-center justify-between mb-[20px]'>
				<div className='flex items-center  text-[26px]'>
					<div className='font-bold'>무비차트</div>
					<div className='w-[1px] h-[20px] bg-[#cacaca] mx-[20px]'></div>
					<div className='text-[#666] font-normal'>
						상영예성작
					</div>
				</div>
				<div className='text-[14px] py-[4px] pr-[32px] pl-[15px] cursor-pointer border-[1px] border-[#e2e2e2] rounded-[15px] drop-shadow-2xl'>
					전체보기
				</div>
			</div>
			<div className='grid grid-cols-5 pb-[60px]'>
				{movies.slice(0, displayCount).map((m, id) => {
					return (
						<div
							key={id}
							className='flex flex-col items-center w-[170px] h-[234px] mx-[15px] drop-shadow-2xl'
						>
							<img
								className='w-full h-full rounded-[10px]'
								src={`https://image.tmdb.org/t/p/w500${m.posterPath}`}
								alt={m.title}
							/>
							<strong className='mt-[14px]'>
								{m.title}
							</strong>
							<div className='flex justify-center text-[14px] text-[#444] mt-[9px]'>
								<div>
									{m.voteAverage
										? m.voteAverage.toFixed(1)
										: "N/A"}
								</div>
								<div className='w-[1px] h-[20px] bg-[#cacaca] mx-[20px]'></div>
								<div>예매율 </div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MovieChart;
