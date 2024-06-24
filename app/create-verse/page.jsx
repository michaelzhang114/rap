"use client";

import React from "react";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FormGenerate from "@components/FormGenerate";
import VerseOutput from "@components/VerseOutput";

import { connectToDB } from "@utils/database";

const CreateVerse = () => {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [submitting, setSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
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
				// display "saved to profile!"
				// router.push("/profile");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
			setIsSubmitted(true);
		}
	};

	return (
		<div className="mx-4 my-6">
			{status === "unauthenticated" ? (
				<div>
					<p>Unauthenticated. Please sign in</p>
				</div>
			) : (
				<FormGenerate
					handleSubmit={createVerse}
					submitting={submitting}
					isSubmitted={isSubmitted}
					haiku={verse}
					setHaiku={setVerse}
				></FormGenerate>
			)}
		</div>
	);
};

export default CreateVerse;
