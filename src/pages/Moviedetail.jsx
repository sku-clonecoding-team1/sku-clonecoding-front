import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
	const Ltoken = localStorage.getItem("token");
	const [movie, setMovie] = useState(null);
	const [searchParams] = useSearchParams();
	const movieId = searchParams.get("id");
	console.log("Selected Movie ID:", movieId);

	const FetchMovies = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/getMovieDetail/${movieId}`,
				{
					headers: {
						Authorization: `Bearer ${Ltoken}`,
					},
				}
			);
			if (response.status === 200) {
				setMovie(response.data.results || response.data); // 영화 데이터를 배열로 설정
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
		if (movieId) {
			FetchMovies(); // movieId가 있을 때만 영화 데이터 가져오기
		}
	}, [movieId]);

	// useEffect(() => {
	// 	const fetchMovieDetails = async () => {
	// 		if (movieId) {
	// 			try {
	// 				const response = await axios.get(
	// 					`https://api.themoviedb.org/3/movie/${movieId}`,
	// 					{
	// 						params: {language: "ko-kr"},
	// 						headers: {
	// 							accept: "application/json",
	// 							Authorization:
	// 								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNhNGQyMmVjODk5ZTJhMTZjMTcyY2JkZDlmMDg4MyIsIm5iZiI6MTcyMDY2MTkwMi41MDkyODUsInN1YiI6IjY2OGYzNjNjNGE4NTIyMGFhZWU2ZTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h77cby9sICrCG41NN3Osp_hm0rMGi2JBgaz_G1aGsBU",
	// 						},
	// 					}
	// 				);
	// 				setMovie(response.data);
	// 			} catch (error) {
	// 				console.error(
	// 					"영화 정보를 불러오는 데 실패했습니다.",
	// 					error
	// 				);
	// 			}
	// 		}
	// 	};
	// 	fetchMovieDetails();
	// }, [movieId]);

	if (!movie) return <div>로딩 중...</div>;

	return (
		<div className='flex flex-col'>
			<div className='flex justify-start px-[250px] py-[40px]'>
				<div>
					<img
						className='w-[245px] h-[270px]'
						src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
						alt={movie.title}
					/>
				</div>
				<div className='flex flex-col items-start w-full ml-5'>
					<strong className='text-[25px] text-[#1a1919] font-semibold'>
						{movie.title}
					</strong>
					<span className='text-[12px] text-[#333333] font-light'>
						{movie.originalTitle}
					</span>
					<div className='flex w-full my-[15px] border-b-[1px] border-[#d9d6c8] pb-[10px]'>
						<span className='text-[14px] text-[#6B5F71]'>
							평점:{" "}
							<span className='font-light'>
								{movie.voteAverage}
							</span>
						</span>
					</div>
					<div className='flex flex-col text-[13px] pb-[20px] font-medium'>
						장르:{" "}
						{movie.genres
							? movie.genres
									.map((genre) => genre.name)
									.join(", ")
							: "정보 없음"}{" "}
						{/* genres에서 name을 추출 */}
						<span>
							개봉일: {movie.releaseDate.replace(/-/g, ".")}
						</span>
					</div>
					<div className='flex justify-start'>
						<div className='flex items-center justify-center text-[14px] border-[1px] border-[black] cursor-pointer px-[20px] py-[7px] rounded-[5px] font-semibold'>
							프리에그
						</div>
						<div
							onClick={navigator}
							className='flex items-center justify-center text-[white] bg-[#FF4A57] text-[14px] border-[1px] border-[#FF4A57] cursor-pointer px-[20px] py-[7px] rounded-[5px] font-semibold ml-[15px]'
						>
							예매하기
						</div>
					</div>
				</div>
			</div>
			<div className='w-full px-[250px] flex flex-col items-center'>
				<div className='w-[50%] flex items-center justify-center text-[15px] text-[white] bg-[#fb4357] p-[10px] font-bold'>
					<span className='pr-[20px] cursor-pointer'>
						주요정보
					</span>
					<span className='border-x-[2px] border-[white] px-[20px] cursor-pointer'>
						영화개요
					</span>
					<span className='pl-[20px] cursor-pointer'>
						평점/리뷰
					</span>
				</div>
			</div>
			<div className='px-[250px] text-start text-[13px] py-[40px]'>
				{movie.overview}
			</div>
		</div>
	);
};

export default MovieDetail;
