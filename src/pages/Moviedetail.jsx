import React, {useEffect, useState} from "react";
import axios from "axios";
import {
	useNavigate,
	useSearchParams,
} from "react-router-dom";

const MovieDetail = () => {
	const [movie, setMovie] = useState({
		id: "",
		title: "",
		original_title: "",
		vote_average: "",
		release_date: "",
		genre_ids: "",
		adult: "",
		overview: "",
		poster_path: "",
	});
	const navigation = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const FetchMovies = async () => {
			const options = {
				method: "GET",
				url: `https://api.themoviedb.org/3/movie/popular${movie.id}`,
				params: {language: "ko-kr", page: "1", id: ""},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNhNGQyMmVjODk5ZTJhMTZjMTcyY2JkZDlmMDg4MyIsIm5iZiI6MTcyMDY2MTkwMi41MDkyODUsInN1YiI6IjY2OGYzNjNjNGE4NTIyMGFhZWU2ZTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h77cby9sICrCG41NN3Osp_hm0rMGi2JBgaz_G1aGsBU",
				},
			};
			try {
				const response = await axios.request(options);
				setMovie(response.data.results);
				console.log(response.data.results);
			} catch (error) {
				console.log("api를 불러오지 못했습니다.", error);
			}
		};
		FetchMovies();
	}, []);

	return (
		<>
			<div key={movie.id} className='flex justify-start'>
				<div>
					{/* 영화포흐터 */}
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt=''
					/>
				</div>
				<div className='flex flex-col items-center '>
					{/* 영화 타이틀, 영어 타이틀 */}
					<div className='mb-[15px]'>
						<span className='text-[20px]'>
							{movie.title}
						</span>
						<span className='text-[13px]'>
							{movie.original_title}
						</span>
					</div>
					{/* 영화 평점, 개봉일 */}
					<div className='flex justify-center'>
						<span className='mr-[10px]'>
							평점: {movie.vote_average}
						</span>
						<div className='w-[1px] h-[20px] bg-[#cacaca] mx-[8px]'></div>
						<span className='ml-[10px]'>
							개봉일: {movie.release_date}
						</span>
						<hr />
					</div>
					{/* 영화 장르 */}
					<div>장르: </div>
					{/* 영화 개요 및 설명 */}
					<div>
						<span>{movie.overview}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
