import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import {FaPlus} from "react-icons/fa6";

const Movieinfo = () => {
	const Ltoken = localStorage.getItem("token");
	const [movies, setMovies] = useState([]); // 배열로 초기화
	const navigation = useNavigate();
	const [displayCount, setDisplayCount] = useState(20);

	const loadMoreMovies = () => {
		setDisplayCount((prevCount) => prevCount + 20);
	};

	const getReleaseDateLabel = (releaseDate) => {
		if (!releaseDate) return "N/A"; // releaseDate가 없을 때 처리
		const release = new Date(releaseDate);
		const today = new Date();
		const diffTime = today - release;
		const diffDays = Math.ceil(
			diffTime / (1000 * 60 * 60 * 24)
		);

		if (diffDays > 0) {
			return `D+${diffDays}`;
		} else if (diffDays < 0) {
			return `D-${Math.abs(diffDays)}`;
		} else {
			return "D-Day";
		}
	};

	const FetchMovies = async () => {
		try {
			const response = await axios.get(
				"http://localhost:8080/getMoviePage/1",
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
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

	console.log("Poster Path:", movies.posterPath); // 포스터 경로 로그 확인

	return (
		<>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 pb-[40px] pt-[10px]'>
				{movies.slice(0, displayCount).map((movie, id) => (
					<div className='h-full rounded-[30px]' key={id}>
						{id === 3 ? (
							// id가 3인 경우에는 영화 정보 없이 다른 이미지 표시
							<div className='bg-[black] w-[197px] h-[427px] my-[3px]'>
								<img
									src='img/main/movieinfo/movieinfobanner'
									alt=''
								/>
							</div>
						) : (
							// 나머지 영화 정보 표시
							<>
								<div
									className={`w-[197px] h-[28px] flex justify-center items-center text-white text-[18px] drop-shadow-2xl font-medium py-[3px] my-[5px] ${
										id < 3 ? "bg-[#fb4357]" : "bg-[#333333]"
									}`}
								>
									No.{id + 1}
								</div>
								<Link
									to={`/MovieDetail?id=${movie.movieId}`}
								>
									<img
										className='w-[197px] h-[260px] drop-shadow-2xl'
										src={`http://localhost:8080/getMoviePage/1${movie.posterPath}`}
										alt={movie.title}
										style={{maxWidth: "100%"}}
									/>
								</Link>

								<div className='text-[15px] flex flex-col items-start my-[3px]'>
									<div
										className='truncate my-[5px] font-semibold'
										style={{width: "197px"}}
									>
										{movie.title}
									</div>
									<span className='text-[11px] text-[#666666] mb-[5px] font-semibold'>
										평점
										<div className='inline w-[2px] h-[10px] bg-[black] mx-[3px]'></div>
										{movie.voteAverage
											? movie.voteAverage.toFixed(1)
											: "N/A"}
									</span>
									<span className='text-[11px] text-[#666666] mb-[10px] font-semibold'>
										{movie.releaseDate
											? movie.releaseDate.replace(/-/g, ".")
											: "N/A"}{" "}
										개봉
									</span>
									<span className='text-[11px] text-[#666666] mb-[10px] font-semibold'>
										{getReleaseDateLabel(movie.releaseDate)}{" "}
										개봉
									</span>
									<Link
										to={`/Reg?id=${id}`}
										className='text-white text-[13px] font-semibold bg-[#fb4357] rounded-[6px] py-[3px] px-[25px]'
									>
										예매하기
									</Link>
								</div>
							</>
						)}
					</div>
				))}
			</div>
			{displayCount < movies.length && (
				<div className='flex justify-end items-center pb-[60px]'>
					<button
						className='text-black text-[13px] font-medium flex'
						onClick={loadMoreMovies}
					>
						더보기
						<div className='flex justify-center items-center bg-[#9FA0A0] w-[20px] h-[20px] rounded-[4px] overflow-hidden ml-[5px]'>
							<FaPlus size={16} color='white' />
						</div>
					</button>
				</div>
			)}
		</>
	);
};

export default Movieinfo;
