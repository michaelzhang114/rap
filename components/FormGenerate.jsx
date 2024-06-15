import React from "react";
import { useState } from "react";
import axios from "axios";
import CustomArtistRadio from "./CustomArtistRadio";

const FormGenerate = ({ handleSubmit, haiku, setHaiku }) => {
	const [payload, setPayload] = useState({ word: "", artist: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// artist selection
	const [selectedArtist, setSelectedArtist] = useState("");
	const handleArtistSelect = (value) => {
		setSelectedArtist(value);
		setPayload({ ...payload, word: value });
	};

	// keep track of if the "generate" button has been pressed
	const [hasGenerated, setHasGenerated] = useState(false);

	const handleGenerate = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			console.log(
				`calling api with payload of ${JSON.stringify(payload)}`
			);
			const response = await axios.post("/api/generate", { payload });
			console.log(response);
			setHaiku({ title: "generated", contents: response.data });
		} catch (err) {
			console.log(err);
			setError("Failed to generate. Please try again.");
		} finally {
			setLoading(false);
			setHasGenerated(true);
		}
	};

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
				<div className="flex flex-col my-6">
					<article className="prose lg:prose-xl mb-4">
						<h2>1. Pick Your Style</h2>
					</article>
					<div className="overflow-x-auto w-full">
						<CustomArtistRadio
							label="my custom checkbox"
							onSelect={handleArtistSelect}
							className="flex flex-row"
						></CustomArtistRadio>
					</div>

					<p>Selected: {selectedArtist}</p>
				</div>
				<div className="my-6">
					<article className="prose lg:prose-xl mb-4">
						<h2>2. Pick Your Mood</h2>
						<p>TODO</p>
					</article>{" "}
					{/* <button className="btn btn-outline btn-sm">Default</button> */}
				</div>
				<div className="my-6">
					<article className="prose lg:prose-xl mb-4">
						<h2>3. Generate</h2>
					</article>{" "}
					<button
						className="btn btn-primary"
						type="submit"
						disabled={loading}
					>
						{loading ? "Generating..." : "Generate Bars"}
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
					<div className="flex flex-col w-6/12">
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
