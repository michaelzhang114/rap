"use client";

import React from "react";

const Form = ({ type, verse, setVerse, submitting, handleSubmit }) => {
	return (
		<section>
			<h1>{type} Verse</h1>
			<form action="" onSubmit={handleSubmit} className="">
				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Verse name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
						value={verse.title}
						onChange={(e) =>
							setVerse({ ...verse, title: e.target.value })
						}
						required
					/>
				</label>

				<label className="form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Verse contents</span>
					</div>
					<textarea
						className="textarea textarea-accent"
						placeholder="Write your verse here"
						value={verse.contents}
						onChange={(e) =>
							setVerse({ ...verse, contents: e.target.value })
						}
						required
					></textarea>
				</label>

				<div>
					<button
						className="btn btn-primary"
						type="submit"
						disabled={submitting}
					>
						{submitting ? `${type}...` : type}
					</button>
					<button className="btn btn-outline">Cancel</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
