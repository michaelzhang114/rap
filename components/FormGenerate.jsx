import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomArtistRadio from "./CustomArtistRadio";
import MoodCheckbox from "./MoodCheckbox";

const getTrueKeys = (obj) => {
	return Object.keys(obj).filter((key) => obj[key]);
};

const FormGenerate = ({ handleSubmit, haiku, setHaiku }) => {
	const [shouldCallAPI, setShouldCallAPI] = useState(false);

	const [payload, setPayload] = useState({ word: "", moods: [] });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// artist selection
	const [selectedArtist, setSelectedArtist] = useState("");
	const handleArtistSelect = (value) => {
		setSelectedArtist(value);
		setPayload({ ...payload, word: value });
	};

	// mood selection
	const [selectedMoods, setSelectedMoods] = useState([]);
	const handleMoodsSelect = (value) => {
		console.log("handleMoodsSelect");
		// console.log(value);
		// setSelectedMoods(value);
		setPayload({ ...payload, moods: getTrueKeys(moods) });
	};
	const [moods, setMoods] = useState({
		anger: false,
		anxious: false,
		disappointment: false,
		despair: false,
		pride: false,
		joyful: false,
		powerful: false,
		optimistic: false,
		disapproval: false,
		confused: false,
		excited: false,
	});
	const trueMoods = getTrueKeys(moods);

	// keep track of if the "generate" button has been pressed
	const [hasGenerated, setHasGenerated] = useState(false);

	// use today's date as the title of the verse
	const [todayDate, setTodayDate] = useState("");

	const handleGenerate = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		console.log("what i should send");
		console.log(getTrueKeys(moods));

		setPayload((prevPayload) => ({
			...payload,
			moods: getTrueKeys(moods),
		}));

		setShouldCallAPI(true);
	};

	// useEffect(() => {
	// 	console.log(`moods: ${JSON.stringify(moods)}`);
	// 	console.log(`selected moods: ${JSON.stringify(selectedMoods)}`);
	// }, [moods]);

	// useEffect(() => {
	// 	if (loading) {
	// 		console.log("what I actually send");
	// 		console.log(payload);
	// 		setLoading(false); // Reset loading state after logging
	// 	}
	// }, [payload, loading]);

	useEffect(() => {
		const currentDate = new Date();
		const options = { year: "numeric", month: "short", day: "numeric" };
		const formattedDate = currentDate.toLocaleDateString("en-US", options);
		setTodayDate(formattedDate);
	}, []);

	useEffect(() => {
		if (shouldCallAPI) {
			const callAPI = async () => {
				try {
					console.log(
						`calling api with payload of ${JSON.stringify(payload)}`
					);
					const response = await axios.post("/api/generate", {
						payload,
					});
					console.log(response);
					setHaiku({
						title: `${todayDate}`,
						contents: response.data,
					});
				} catch (err) {
					console.log(err);
					setError("Failed to generate. Please try again.");
				} finally {
					setLoading(false);
					setHasGenerated(true);
					setShouldCallAPI(false);
				}
			};
			callAPI();
		}
	}, [payload, shouldCallAPI]);

	return (
		<section>
			<form onSubmit={handleGenerate}>
				{/* <label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Verse name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
						value={payload.word}
						onChange={(e) =>
							setPayload({ ...payload, word: e.target.value })
						}
						// value={verse.title}
						// onChange={(e) =>
						// 	setVerse({ ...verse, title: e.target.value })
						// }
					/>
				</label> */}
				<div className="flex flex-col mt-10">
					<article className="prose lg:prose-xl mb-4">
						<h2>1. Pick Your Inspiration</h2>
					</article>
					<div className="overflow-x-auto w-full mb-4 pb-5">
						<CustomArtistRadio
							label="my custom checkbox"
							onSelect={handleArtistSelect}
							className="flex flex-row"
						></CustomArtistRadio>
					</div>
				</div>
				<div className="my-7 pb-5">
					<article className="prose lg:prose-xl mb-4">
						<h2>2. Pick Your Mood</h2>
					</article>{" "}
					<MoodCheckbox
						moods={moods}
						setMoods={setMoods}
						onSelect={handleMoodsSelect}
					></MoodCheckbox>
				</div>
				<div className="my-6">
					<article className="prose lg:prose-xl mb-4">
						<h2>3. Generate</h2>
					</article>{" "}
					<p>Style: {selectedArtist}</p>
					<div>
						<label>Moods selected:</label>
						<ul>
							{trueMoods.map((key) => (
								<li key={key}>{key}</li>
							))}
						</ul>
					</div>
					<button
						className="btn btn-primary"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<span className="loading loading-ring loading-lg"></span>
						) : (
							"Generate Bars"
						)}
					</button>
					{/* <button className="btn btn-outline">Cancel</button> */}
				</div>
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{haiku && hasGenerated && (
				<div className="container">
					<article className="prose lg:prose-xl mb-4">
						<h2>Your Verse</h2>
					</article>{" "}
					<div className="flex flex-col w-full">
						<textarea
							className="textarea textarea-secondary mb-4"
							rows="10"
							cols="50"
							placeholder="Bio"
							value={haiku.contents}
							onChange={(e) =>
								setHaiku((prev) => ({
									...prev,
									contents: e.target.value,
								}))
							}
						/>
						<button
							className="btn btn-primary max-w-xs"
							onClick={handleSubmit}
						>
							Save{" "}
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default FormGenerate;
