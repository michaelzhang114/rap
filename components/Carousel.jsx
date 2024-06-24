import React from "react";
import Image from "next/image";

const Carousel = ({ options }) => {
	return (
		<div className="carousel carousel-center bg-neutral rounded-box max-w-xs lg:max-w-4xl space-x-4 p-2">
			{options.map((artist) => (
				<div className="carousel-item" key={artist.name}>
					<label className="label cursor-pointer px-4 py-4">
						<div className="flex flex-row">
							<div className="avatar">
								<div className="w-24 rounded-xl">
									<Image
										src={artist.imageSrc}
										width={100}
										height={100}
										alt="Picture of the author"
									/>
								</div>
							</div>
							<div className="flex flex-col pl-4">
								<div className="w-40">
									<span className="label-text font-extrabold">
										{artist.name}
									</span>
									<div className="text-sm">
										{artist.details}
									</div>
								</div>
							</div>
						</div>
					</label>
				</div>
			))}
		</div>
	);
};

export default Carousel;
