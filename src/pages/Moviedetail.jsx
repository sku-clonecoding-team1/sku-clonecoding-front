import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
	const [movie, setMovie] = useState(null);
	const [searchParams] = useSearchParams();
	const movieId = searchParams.get("id");
	console.log("Selected Movie ID:", movieId);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			if (movieId) {
				try {
					const response = await axios.get(
						`https://api.themoviedb.org/3/movie/${movieId}`,
						{
							params: {language: "ko-kr"},
							headers: {
								accept: "application/json",
								Authorization:
									"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNhNGQyMmVjODk5ZTJhMTZjMTcyY2JkZDlmMDg4MyIsIm5iZiI6MTcyMDY2MTkwMi41MDkyODUsInN1YiI6IjY2OGYzNjNjNGE4NTIyMGFhZWU2ZTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h77cby9sICrCG41NN3Osp_hm0rMGi2JBgaz_G1aGsBU",
							},
						}
					);
					setMovie(response.data);
				} catch (error) {
					console.error(
						"영화 정보를 불러오는 데 실패했습니다.",
						error
					);
				}
			}
		};

		fetchMovieDetails();
	}, [movieId]);

	if (!movie) return <div>로딩 중...</div>;

	return (
		<div className='flex justify-start'>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
			</div>
			<div className='flex flex-col items-start ml-5'>
				<h2 className='text-2xl'>{movie.title}</h2>
				<p>{movie.original_title}</p>
				<div className='flex'>
					<span className='mr-2'>
						평점: {movie.vote_average}
					</span>
					<span>개봉일: {movie.release_date}</span>
				</div>
				<div>
					장르:{" "}
					{movie.genres
						.map((genre) => genre.name)
						.join(", ")}
				</div>
				<div>개요: {movie.overview}</div>
			</div>
		</div>
	);
};

export default MovieDetail;
