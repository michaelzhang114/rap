import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomArtistRadio from "./CustomArtistRadio";
import MoodCheckbox from "./MoodCheckbox";
import { useSession } from "next-auth/react";
import FormSubmit from "./FormSubmit";
import Link from "next/link";

const getTrueKeys = (obj) => {
	return Object.keys(obj).filter((key) => obj[key]);
};

const FormGenerate = ({
	handleSubmit,
	haiku,
	setHaiku,
	submitting,
	isSubmitted,
}) => {
	// need to use session to get the number of credits the current user has
	const { data: session, status, update } = useSession();

	const [credits, setCredits] = useState(0);

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
		// set state to be the number of credits at component load
		// console.log(session?.user?.credits);
		// console.log("set");

		setCredits(session?.user?.credits);
	}, [session]);

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
					update();
				}
			};
			callAPI();
		}
	}, [payload, shouldCallAPI]);

	return (
		<section className="mb-12">
			<form onSubmit={handleGenerate}>
				<article className="prose lg:prose-xl w-full mt-12">
					<h2>Rap Generator: </h2>
				</article>

				<div className="flex flex-col mt-10" data-aos="zoom-y-out">
					<article className="prose lg:prose-xl mb-4">
						<h3>1. Select Your Inspiration</h3>
					</article>
					{/* <div className="overflow-x-auto w-full mb-4 pb-5"> */}
					<div className="">
						<CustomArtistRadio
							label="my custom checkbox"
							onSelect={handleArtistSelect}
							className="flex flex-row"
						></CustomArtistRadio>

						<div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 p-2 rounded-l-full mt-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div
					className="my-7 pb-5"
					data-aos="zoom-y-out"
					data-aos-delay="150"
				>
					<article className="prose lg:prose-xl mb-4">
						<h3>2. Pick Your Mood(s)</h3>
					</article>
					<MoodCheckbox
						moods={moods}
						setMoods={setMoods}
						onSelect={handleMoodsSelect}
					></MoodCheckbox>
				</div>
				<div className="my-6" data-aos="zoom-y-out">
					<article className="prose lg:prose-xl mb-4">
						<h3>3. Generate</h3>
					</article>
					<label>
						Style:
						{selectedArtist == "" ? (
							<div></div>
						) : (
							<span className="badge badge-primary">
								{selectedArtist}
							</span>
						)}
					</label>
					<div className="flex flex-row my-1">
						<label>Moods selected:</label>
						<ul className="flex flex-row">
							{trueMoods.map((key) => (
								<li key={key} className="mx-1">
									<div className="badge badge-primary">
										{key}
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-row items-center gap-3 mt-3">
						{/* <button
							type="button"
							class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						>
							Purple to Blue
						</button> */}

						<button
							// className="btn btn-primary my-4"
							className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							type="submit"
							disabled={
								loading ||
								credits == 0 ||
								selectedArtist === "" ||
								trueMoods.length === 0
							}
						>
							{loading ? (
								<span className="loading loading-ring loading-lg"></span>
							) : (
								"Write me a verse"
							)}
						</button>

						{session ? (
							<label>Credits remaining: {credits}</label>
						) : (
							<></>
						)}
					</div>
					{/* <button className="btn btn-outline">Cancel</button> */}
				</div>
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{haiku && hasGenerated && (
				<div
					className="container"
					data-aos="zoom-y-out"
					data-aos-delay="400"
				>
					<article className="prose lg:prose-xl mb-4 mx-auto text-center">
						<h2>Your Verse</h2>
					</article>
					<div className="flex flex-col">
						<textarea
							className="textarea textarea-accent mb-4 min-w-80 max-w-[500px] mx-auto"
							rows="16"
							// cols="50"
							placeholder="Bio"
							value={haiku.contents}
							onChange={(e) =>
								setHaiku((prev) => ({
									...prev,
									contents: e.target.value,
								}))
							}
						/>
						{session ? (
							<FormSubmit
								handleSubmit={handleSubmit}
								submitting={submitting}
								isSubmitted={isSubmitted}
							/>
						) : (
							<>
								<p>
									Want to save your verses?{" "}
									<Link
										href="/profile"
										className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
									>
										Login
									</Link>
								</p>
							</>
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default FormGenerate;
