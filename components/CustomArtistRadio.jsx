// "use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const artistsList = [
	{
		name: "Black Thought",
		imageSrc: "/artists/black_thought.jpg",
		details: "Masterful blend of wordplay & profound social commentary.",
	},
	{
		name: "J. Cole",
		imageSrc: "/artists/j_cole.jpg",
		details: "Introspective, narrative-driven and thought-provoking.",
	},
	{
		name: "Snoop Dogg",
		imageSrc: "/artists/snoop.jpg",
		details:
			"Smooth, laid-back flow, and a signature blend of West Coast swagger.",
	},
	{
		name: "Chance the Rapper",
		imageSrc: "/artists/black_thought.jpg",
		details:
			"text text text text text text text text text text text text text.",
	},
	{
		name: "21 Savage",
		imageSrc: "/artists/black_thought.jpg",
		details:
			"text text text text text text text text text text text text text.",
	},
	{
		name: "Lil Pump",
		imageSrc: "/artists/black_thought.jpg",
		details:
			"text text text text text text text text text text text text text.",
	},
	{
		name: "Logic",
		imageSrc: "/artists/black_thought.jpg",
		details:
			"text text text text text text text text text text text text text.",
	},
];

const ArtistRadio = ({ options, handleOptionChange, selectedOption }) => (
	<div className="flex flex-row">
		{options.map((artist) => (
			<div
				className={`card card-side shadow-xl mx-3 ${
					selectedOption == artist.name ? "bg-accent" : "bg-base-300"
				}`}
				key={artist.name}
			>
				<label className="label cursor-pointer px-6 py-4">
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
