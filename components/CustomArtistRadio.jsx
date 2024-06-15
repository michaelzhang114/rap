// "use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const artistsList = [
	{
		name: "Black Thought",
		imageSrc: "/artists/black_thought.jpg",
		details: "",
	},
	{
		name: "J Cole",
		imageSrc: "/artists/black_thought.jpg",
		details: "",
	},
	{
		name: "Snoop",
		imageSrc: "/artists/black_thought.jpg",
		details: "",
	},
];

const ArtistRadio = ({ options, handleOptionChange, selectedOption }) => (
	<>
		{options.map((artist) => (
			<label className="label cursor-pointer" key={artist.name}>
				<span className="label-text">{artist.name}</span>
				<Image
					src={artist.imageSrc}
					width={40}
					height={40}
					alt="Picture of the author"
				/>
				<input
					type="radio"
					name="radio-10"
					className="radio checked:bg-red-500"
					id={artist.name}
					value={artist.name}
					onChange={handleOptionChange}
				/>
			</label>
		))}
	</>
);

const CustomArtistRadio = ({ label, onSelect }) => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionChange = (event) => {
		const value = event.target.value;
		console.log(value);
		setSelectedOption(value);
		onSelect(value);
	};

	const [checked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked((checked) => !checked);
		console.log(checked);
	};
	return (
		<>
			<ArtistRadio
				options={artistsList}
				handleOptionChange={handleOptionChange}
				selectedOption={selectedOption}
			></ArtistRadio>
		</>
	);
};

export default CustomArtistRadio;
