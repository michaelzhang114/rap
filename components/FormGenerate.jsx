import React from "react";
import { useState } from "react";
import axios from "axios";

const FormGenerate = ({ handleSubmit, haiku, setHaiku }) => {
	const [word, setWord] = useState("");
	// const [haiku, setHaiku] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleGenerate = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		// setHaiku({ title: "", contents: "" });

		try {
			console.log("calling api");
			const response = await axios.post("/api/generate", { word });
			console.log(response);
			setHaiku({ title: "generated", contents: response.data });
		} catch (err) {
			console.log(err);
			setError("Failed to generate haiku. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section>
			<form onSubmit={handleGenerate}>
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Verse name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
						value={word}
						onChange={(e) => setWord(e.target.value)}
						// value={verse.title}
						// onChange={(e) =>
						// 	setVerse({ ...verse, title: e.target.value })
						// }
						required
					/>
				</label>
				<div>
					<span>moods section</span>
					<button className="btn btn-outline btn-sm">Default</button>
				</div>
				<div>
					<button
						className="btn btn-primary"
						type="submit"
						disabled={loading}
					>
						{loading ? "Generating..." : "Generate Haiku"}
					</button>
					<button className="btn btn-outline">Cancel</button>
				</div>
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{haiku && (
				<div>
					<h2>Your Haiku:</h2>
					<textarea
						className="textarea textarea-success max-w-xs"
						placeholder="Bio"
						value={haiku.contents}
						onChange={(e) =>
							setHaiku((prev) => ({
								...prev,
								contents: e.target.value,
							}))
						}
					/>
					<button className="btn btn-primary" onClick={handleSubmit}>
						Save{" "}
					</button>
				</div>
			)}
		</section>
	);
};

export default FormGenerate;
