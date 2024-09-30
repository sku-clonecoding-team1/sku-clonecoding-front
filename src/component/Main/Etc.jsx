import React from "react";
import {Food} from "../../constants/Etc";
import {MovieW} from "../../constants/Etc";

const Etc = () => {
	return (
		<div className='pt-[60px] px-[280px]'>
			<div className='flex items-center'>
				<div className='pt-[20px] pb-[30px] px-[19px]'>
					<div className='flex justify-between'>
						<div className=''>패키지</div>
						<div className='px-[15px] py-[3px] border-[1px] border-[#f4f4f4] rounded-[10px]'>
							더보기
						</div>
					</div>
					{Food.map((f, id) => {
						return (
							<>
								<div
									key={id}
									className='flex justify-start items-center'
								>
									<img
										src={f.src}
										className='w-[75px]'
										alt=''
									/>
									<div className='font-bold'>
										<div className='text-[14px]'>
											{f.title}
										</div>
										<div className='text-[16px]'>
											{f.price}
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Etc;
