import axios from "axios";
import { OpenAI } from "openai";
import { getServerSession } from "next-auth/next";
import { config } from "../auth/[...nextauth]/auth";
import User from "@models/user";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY || "",
});

const formatArray = (arr) => {
	if (arr.length === 0) return "";
	if (arr.length === 1) return `with a mood of ${arr[0]}`;
	if (arr.length === 2) return `with moods of ${arr[0]} and ${arr[1]}`;
	const lastItem = arr.pop();
	return `with moods of ${arr.join(", ")}, and ${lastItem}`;
};

export const POST = async (request, res) => {
	try {
		const { payload } = await request.json();

		console.log(`backend got ${JSON.stringify(payload)}`);
		// console.log(payload.moods[0]);

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

		const prompt = `Write one rap verse (100 words maximum) in the style of ${
			payload.word
		}, ${formatArray(payload.moods)}. Don't include ${
			payload.word
		} in the rap.`;
		console.log(prompt);

		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content: prompt,
				},
			],
			model: "gpt-3.5-turbo",
		});
		if (completion) {
			console.log(completion.choices[0].message);
		} else {
			console.log("no completion");
		}

		const session = await getServerSession(config);
		console.log("this session");
		console.log(session);

		// //decrement credit count
		const filter = { email: session?.user?.email };
		const update = { credits: session?.user?.credits - 1 };

		const out = await User.findOneAndUpdate(filter, update, {
			new: true,
		});

		console.log(out.email);
		console.log(out.credits);

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
