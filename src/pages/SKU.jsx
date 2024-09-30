import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import MovieChart from "../component/Main/MovieChart";
import Event from "../component/Main/Event";
import Special from "../component/Main/Special";
import Etc from "../component/Main/Etc";

const SKU = () => {
	const [movies, setMovies] = useState([]); // 배열로 초기화
	const [displayCount, setDisplayCount] = useState(5);

	const loadMoreMovies = () => {
		setDisplayCount((prevCount) => prevCount + 5);
	};
	const navigation = useNavigate();

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
		<div className=''>
			<div className='w-full h-[498px]'></div>
			<MovieChart />
			<Event />
			<Special />
			<Etc />
		</div>
	);
};

export default SKU;
