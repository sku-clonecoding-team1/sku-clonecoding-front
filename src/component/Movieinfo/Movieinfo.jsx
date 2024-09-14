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

	// const getMovieData = async () => {
	//   try{
	//     const res = await axios.get(
	//       "api",

	//     )
	//   }
	// }

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
					<Link
						to={`/MovieDetail?id=${id}`}
						className=' h-full rounded-[30px]'
						key={movie.id}
					>
						<div
							className={`text-center text-white text-[20px] font-bold rounded-y-[10px] py-[3px] my-[5px] ${
								id < 3 ? "bg-[#2D6FFF]" : "bg-[#757575]"
							}`}
						>
							No.{id + 1}
						</div>
						<img
							className='w-full h-[300px] drop-shadow-2xl'
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
						/>
						<div className='flex flex-col items-start my-[3px]'>
							<div className='my-[5px] font-bold'>
								{movie.title}
							</div>
							<div className='mb-[1px]'>
								{movie.release_date} 개봉
							</div>
							<div className='mb-[3px]'>
								{movie.vote_average.toFixed(1)}
							</div>
							<Link
								to='/'
								className='text-white text-[13px] font-semibold bg-[#2D6FFF] rounded-[5px] py-[7px] px-[20px]'
							>
								예매하기
							</Link>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};
export default Movieinfo;
