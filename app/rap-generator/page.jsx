"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FormGenerate from "@components/FormGenerate";
import Hero from "@components/Hero";
import Benefits from "@components/Benefits";
import HowItWorks from "@components/HowItWorks";
import FAQ from "@components/FAQ";

const RapGenerator = () => {
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
		<div>
			<Hero />
			<div className="mx-5 my-6 lg:max-w-5xl lg:mx-auto">
				<Benefits></Benefits>

				<FormGenerate
					handleSubmit={createVerse}
					submitting={submitting}
					isSubmitted={isSubmitted}
					haiku={verse}
					setHaiku={setVerse}
				></FormGenerate>
				<HowItWorks />
				<FAQ />
			</div>
		</div>
	);
};

export default RapGenerator;
