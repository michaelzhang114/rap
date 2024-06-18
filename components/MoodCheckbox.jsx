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
		console.log("update checkbox");
		onSelect(moods);
	};

	return (
		<div>
			{Object.keys(moods).map((m) => (
				// <input
				// 	type="checkbox"
				// 	onChange={handleToggle}
				// 	key={key}
				// 	name={key}
				// 	checked={state[key]}
				// />

				<label className="label cursor-pointer" key={m}>
					<span className="label-text">{m}</span>
					<input
						type="checkbox"
						// defaultChecked
						value={m}
						className="checkbox"
						onChange={handleChange}
					/>
				</label>
			))}
			{/* <label className="label cursor-pointer">
				<span className="label-text">first me</span>
				<input
					type="checkbox"
					// defaultChecked
					value="anger"
					className="checkbox"
					onChange={handleChange}
				/>
			</label>
			<label className="label cursor-pointer">
				<span className="label-text">second me</span>
				<input
					type="checkbox"
					// defaultChecked
					value="anxiety"
					className="checkbox"
					onChange={handleChange}
				/>
			</label> */}
		</div>
	);
};

export default MoodCheckbox;
