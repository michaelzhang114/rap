"use client";

import React from "react";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FormGenerate from "@components/FormGenerate";
import VerseOutput from "@components/VerseOutput";

const CreateVerse = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [submitting, setSubmitting] = useState(false);
	const [verse, setVerse] = useState({
		title: "",
		contents: "",
	});

	const createVerse = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			const response = await fetch("api/verse/new", {
				method: "POST",
				body: JSON.stringify({
					title: verse.title,
					contents: verse.contents,
					userId: session?.user.id,
				}),
			});

			if (response.ok) {
				router.push("/profile");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="mx-4">
			{/* Old form to create verse */}
			{/* <Form
				type="Create"
				verse={verse}
				setVerse={setVerse}
				submitting={submitting}
				handleSubmit={createVerse}
			/>{" "}
			<br></br>
			<br></br> */}

			<FormGenerate
				handleSubmit={createVerse}
				haiku={verse}
				setHaiku={setVerse}
			></FormGenerate>

			{/* <VerseOutput></VerseOutput> */}
		</div>
	);
};

export default CreateVerse;
