import axios from "axios";
import { OpenAI } from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY || "",
});

export const POST = async (request, res) => {
	try {
		const { payload } = await request.json();

		console.log(`backend got ${JSON.stringify(payload)}`);
		console.log(payload.moods[0]);

		if (!payload.word) {
			return Response.json(
				{ message: "Artist is required" },
				{ status: 400 }
			);
		}

		if (!payload.moods) {
			return Response.json(
				{ message: "Mood is required" },
				{ status: 400 }
			);
		}
		// const moods = payload.moods;

		console.log("here");

		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content: `Write a Haiku about ${payload.word}`,
				},
			],
			model: "gpt-3.5-turbo",
		});
		if (completion) {
			console.log(completion.choices[0].message);
		} else {
			console.log("no completion");
		}

		return Response.json(`${completion.choices[0].message.content}`, {
			status: 200,
		});

		const haiku = completion.choices[0].message;
	} catch (error) {
		return Response.json(
			{ message: "Error generating haiku", error: error.message },
			{ status: 500 }
		);
	}
};
