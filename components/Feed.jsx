"use client";

import React from "react";
import { useState, useEffect } from "react";
// import PromptCard from "./PromptCard";
import VerseCard from "./VerseCard";

const VerseCardList = ({ data, handleTagClick, handleDelete, loading }) => {
	return loading ? (
		<span className="loading loading-ring loading-lg"></span>
	) : data.length == 0 ? (
		<p>You don&apos;t have any verses.</p>
	) : (
		<div className="flex flex-row flex-wrap mx-auto">
			{data.map((verse) => (
				<VerseCard
					key={verse._id}
					verse={verse}
					handleTagClick={handleTagClick}
					handleDelete={() => {
						handleDelete && handleDelete(verse);
					}}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [loading, setLoading] = useState(false);

	const [searchText, setSearchText] = useState("");

	const [verses, setVerses] = useState([]);
	const handleSearchChange = (e) => {};

	const handleDelete = async (verse) => {
		console.log("deleting");
		const hasConfirmed = confirm("Are you sure you want to delete?");
		if (hasConfirmed) {
			try {
				await fetch(`/api/verse/${verse._id.toString()}`, {
					method: "DELETE",
				});

				// const filteredPosts = posts.filter((p) => p._id !== post._id);
				// setPosts(filteredPosts);
				setVerses((prevVerses) =>
					prevVerses.filter((v) => v._id !== verse._id)
				);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		const fetchVerses = async () => {
			setLoading(true);
			const response = await fetch("/api/verse");
			const data = await response.json();
			setVerses(data);
			setLoading(false);
		};
		fetchVerses();
	}, []);

	return (
		<section className="feed">
			{/* <form className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Search for a tag or username"
					value={searchText}
					onChange={handleSearchChange}
					required
					className="search_input peer"
				/>
			</form> */}
			<div className="">
				<VerseCardList
					data={verses}
					handleTagClick={() => {}}
					handleDelete={handleDelete}
					loading={loading}
				/>
			</div>
		</section>
	);
};

export default Feed;
