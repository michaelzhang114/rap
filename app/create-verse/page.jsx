"use client";

import React from "react";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
				router.push("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div>
			<Form
				type="Create"
				verse={verse}
				setVerse={setVerse}
				submitting={submitting}
				handleSubmit={createVerse}
			/>{" "}
		</div>
	);
};

export default CreateVerse;
