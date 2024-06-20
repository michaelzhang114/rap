import React from "react";
import { useState, useEffect } from "react";

const MoodCheckbox = ({ moods, setMoods, onSelect }) => {
	const handleChange = (event) => {
		if (event.target.checked) {
			setMoods({
				...moods,
				[event.target.value]: true,
			});
		} else {
			setMoods({
				...moods,
				[event.target.value]: false,
			});
		}
		// console.log("update checkbox");
		// onSelect(moods);
	};

	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
			{Object.keys(moods).map((m) => (
				<label
					className="label cursor-pointer card card-side shadow-xl mx-3 bg-base-300 px-4"
					key={m}
				>
					<input
						type="checkbox"
						// defaultChecked
						value={m}
						className="checkbox checkbox-accent"
						onChange={handleChange}
					/>
					<span className="label-text mx-auto">{m}</span>
				</label>
			))}
		</div>
	);
};

export default MoodCheckbox;
