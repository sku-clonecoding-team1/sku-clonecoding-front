import React, {useEffect, useState} from "react";
import axios from "axios";
import {
	useNavigate,
	Link,
	useSearchParams,
} from "react-router-dom";

const Movieinfo = () => {
	const [movies, setMovies] = useState([]);
	const navigation = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const FetchMovies = async () => {
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/movie/popular",
				params: {language: "ko-kr", page: "1"},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNhNGQyMmVjODk5ZTJhMTZjMTcyY2JkZDlmMDg4MyIsIm5iZiI6MTcyMDY2MTkwMi41MDkyODUsInN1YiI6IjY2OGYzNjNjNGE4NTIyMGFhZWU2ZTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h77cby9sICrCG41NN3Osp_hm0rMGi2JBgaz_G1aGsBU",
				},
			};
			try {
				const response = await axios.request(options);
				setMovies(response.data.results);
				console.log(response.data.results);
			} catch (error) {
				console.log("api를 불러오지 못했습니다.", error);
			}
		};
		FetchMovies();
	}, []);

	return (
		<>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-28 gap-y-10 my-[20px] mb-[100px]'>
				{movies.map((movie, id) => (
					<div className='h-full rounded-[30px]' key={id}>
						{id === 3 ? (
							// id가 3인 경우에는 영화 정보 없이 다른 이미지 표시
							<div>
								<img
									src='img/main/movieinfo/movieinfobanner'
									alt=''
								/>
							</div>
						) : (
							// 나머지 영화 정보 표시
							<>
								<div
									className={`text-center text-white text-[18px] drop-shadow-2xl font-extrabold rounded-t-lg py-[3px] my-[5px] ${
										id < 3 ? "bg-[#fb4357]" : "bg-[#333333]"
									}`}
								>
									No.{id + 1}
								</div>
								<Link to={`/MovieDetail?id=${id}`}>
									<img
										className='w-full h-[300px] drop-shadow-2xl'
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt={movie.title}
									/>
								</Link>
								<div className='text-[16px] flex flex-col items-start my-[3px]'>
									<div className='my-[5px] font-bold'>
										{movie.title}
									</div>
									<div className='text-[13px] text-[#666666] mb-[5px]'>
										{movie.vote_average.toFixed(1)}
									</div>
									<div className='text-[13px] text-[#666666] mb-[5px]'>
										{movie.release_date} 개봉
									</div>
									<Link
										to={`/MovieDetail?id=${id}`}
										className='text-white text-[13px] font-semibold bg-[#fb4357] rounded-[6px] py-[5px] px-[20px]'
									>
										예매하기
									</Link>
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</>
	);
};
export default Movieinfo;
