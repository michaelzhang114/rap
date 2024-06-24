// "use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { artistsList } from "./artists";

const ArtistRadio = ({ options, handleOptionChange, selectedOption }) => (
	<div className="grid_scroll_two_rows pb-1">
		{options.map((artist) => (
			<div
				className={`card card-compact card-side shadow-xl mx-3 ${
					selectedOption == artist.name ? "bg-accent" : "bg-base-300"
				}`}
				key={artist.name}
			>
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
								<input
									type="radio"
									name="radio-10"
									className="radio checked:bg-red-500 hidden"
									id={artist.name}
									value={artist.name}
									onChange={handleOptionChange}
								/>
								<span className="label-text font-extrabold">
									{artist.name}
								</span>
								<div className="text-sm">{artist.details}</div>
							</div>
						</div>
					</div>
				</label>
			</div>
		))}
	</div>
);

const CustomArtistRadio = ({ label, onSelect }) => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionChange = (event) => {
		const value = event.target.value;
		// console.log(value);
		setSelectedOption(value);
		onSelect(value);
	};

	const [checked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked((checked) => !checked);
		console.log(checked);
	};
	return (
		<ArtistRadio
			options={artistsList}
			handleOptionChange={handleOptionChange}
			selectedOption={selectedOption}
		></ArtistRadio>
	);
};

export default CustomArtistRadio;
