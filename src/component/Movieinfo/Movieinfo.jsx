import React, {useEffect, useState} from "react";
import axios from "axios";
import {
	useNavigate,
	Link,
	useSearchParams,
} from "react-router-dom";
import {FaPlus} from "react-icons/fa6";

const Movieinfo = () => {
	const [movies, setMovies] = useState([]);
	const navigation = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [displayCount, setDisplayCount] = useState(20);

	const loadMoreMovies = () => {
		setDisplayCount((prevCount) => prevCount + 20);
	};

	const getReleaseDateLabel = (releaseDate) => {
		const release = new Date(
			releaseDate.replace(/\./g, "+")
		); // 형식 변환
		const today = new Date();
		const diffTime = release - today; // 날짜 차이 계산
		const diffDays = Math.ceil(
			diffTime / (1000 * 60 * 60 * 24)
		); // 일수로 변환

		if (diffDays > 0) {
			return `D+${diffDays}`;
		} else if (diffDays < 0) {
			return `D+${diffDays}`; // 이미 과거이므로 음수 그대로 사용
		} else {
			return "D-Day"; // 오늘 개봉
		}
	};

	const FetchMovies = async () => {
		let allMovies = [];
		let currentPage = 1;
		const maxPages = 4; // 최대 페이지 수를 4로 설정

		while (currentPage <= maxPages) {
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/movie/popular",
				params: {language: "ko-kr", page: currentPage},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNhNGQyMmVjODk5ZTJhMTZjMTcyY2JkZDlmMDg4MyIsIm5iZiI6MTcyMDY2MTkwMi41MDkyODUsInN1YiI6IjY2OGYzNjNjNGE4NTIyMGFhZWU2ZTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h77cby9sICrCG41NN3Osp_hm0rMGi2JBgaz_G1aGsBU",
				},
			};

			try {
				const response = await axios.request(options);
				allMovies = [
					...allMovies,
					...response.data.results,
				];
				currentPage++;
			} catch (error) {
				console.log("API를 불러오지 못했습니다.", error);
				break;
			}
		}

		setMovies(allMovies);
		console.log(allMovies);
	};

	useEffect(() => {
		FetchMovies();
	}, []);

	useEffect(() => {
		console.log();
	}, []);
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
									className={`w-[197px] h-[28px] flex justify-center items-center text-white text-[18px] drop-shadow-2xl font-medium py-[3px] my-[5px]  ${
										id < 3 ? "bg-[#fb4357]" : "bg-[#333333]"
									}`}
								>
									No.{id + 1}
								</div>
								<Link to={`/MovieDetail?id=${movie.id}`}>
									<img
										className='w-[197px] h-[260px] drop-shadow-2xl'
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
										{movie.vote_average.toFixed(1)}
									</span>
									<span className='text-[11px] text-[#666666] mb-[10px] font-semibold'>
										{movie.release_date.replace(/-/g, ".")}
										개봉
									</span>
									<span className='text-[11px] text-[#666666] mb-[10px] font-semibold'>
										{getReleaseDateLabel(
											movie.release_date
										)}{" "}
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
