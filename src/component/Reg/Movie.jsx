import React, {useEffect, useState} from "react";
import axios from "axios";

const Movie = ({onSelect}) => {
	const Ltoken = localStorage.getItem("token");
	const [movies, setMovies] = useState([]); // 배열로 초기화
	const [activeBtn, setActiveBtn] = useState(null);

	const handleClick = (buttonId) => {
		setActiveBtn(buttonId);
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

	return (
		<>
			{/* 영화 */}
			<div className='flex flex-col grid-item a bg-[#F2F0E5] border-l-[3px] border-r-[1px] border-[#D4D3C9]'>
				<div className='bg-[#333333] text-[#C3C3C3] w-full py-[10px]'>
					영화
				</div>
				<div className='m-[20px]'>
					{/* 전체, 아트하우스, 특별관 */}
					<div className='flex flex-row items-center justify-center w-fit mb-[3px]'>
						<div className='flex items-center justify-center w-[58px] h-[28px] border-x-[2px] border-t-[2px] border-[#252526]'>
							<button>전체</button>
						</div>
						<select className='flex items-center justify-center w-[90px] h-[28px] border-b-[2px] border-b-[#252526] border-t-[#AAA9A0] border-t-[2px] border-r-[2px] border-r-[#AAA9A0]'>
							<option value=''>아트하우스</option>
							{/* 다른 옵션들 */}
						</select>
						<form className='flex items-center justify-center w-[88px] h-[28px] border-b-[2px] border-b-[#252526] border-t-[#AAA9A0] border-t-[2px] border-r-[2px] border-r-[#AAA9A0]'>
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
					</div>
					{/* 영화 선택 */}
					<div className='scroll-box flex flex-col items-start w-full h-[430px] overflow-x-hidden'>
						{movies.map((movie) => (
							<div
								key={movie.movieId}
								className='regbtn flex items-center justify-center truncate nanum-b w-full min-h-[30px] text-start text-[12px] font-bold py-[12px] cursor-pointer'
								tabIndex='0'
								onClick={() =>
									onSelect("movie", movie.title, movie)
								}
							>
								<div>{movie.title}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Movie;
