import React, {useEffect, useState} from "react";
import axios from "axios";

const Movie = ({onSelect}) => {
	const [movies, setMovies] = useState([]); // 배열로 초기화
	const [activeBtn, setActiveBtn] = useState(null);

	const handleClick = (buttonId) => {
		setActiveBtn(buttonId);
	};

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
			{/* 영화 */}
			<div className='flex flex-col grid-item a bg-[#F2F0E5] border-l-[3px] border-r-[1px] border-[#D4D3C9]'>
				<div className='bg-[#333333] text-[#C3C3C3] w-full py-[10px]'>
					영화
				</div>
				<div className='ticketBox'>
					{/* 전체, 아트하우스, 특별관 */}
					<div className='flex flex-row items-center w-fit mb-[3px]'>
						<div className='px-[5px]'>
							<button>전체</button>
						</div>
						<form>
							<select className='px-[2px] text-center text-[black] bg-inherit flex items-start text-white focus:bg-[#292929] focus:text-[white]'>
								<option value=''>아트하우스</option>
								{/* 다른 옵션들 */}
							</select>
						</form>
						<form>
							<select className='px-[2px] text-center bg-inherit'>
								<option value=''>특별관</option>
								{/* 다른 옵션들 */}
							</select>
						</form>
					</div>
					{/* 예매율순, 가나다순 버튼 */}
					<div className='flex justify-start border-b-[2px] border-[#A8A79E] py-[6px] text-[#666]'>
						<button
							id='reg'
							className={
								activeBtn === "reg"
									? "px-[7px]"
									: "text-[#666] px-[7px]"
							}
							onClick={() => handleClick("reg")}
						>
							영화순위순
						</button>
						<button
							id='abc'
							className={
								activeBtn === "abc"
									? "px-[7px]"
									: "px-[7px]"
							}
							onClick={() => handleClick("abc")}
						>
							가나다순
						</button>
					</div>{" "}
					{/* 영화 선택 */}
					<div className='scroll-box flex flex-col items-start w-full h-[430px]'>
						{movies.map((movie) => (
							<div
								key={movie.id}
								className='RegBtn text-[12px] font-bold py-[10px] cursor-pointer'
								// onClick={}
								onClick={() =>
									onSelect("movie", movie.title)
								}
							>
								{movie.title}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Movie;
