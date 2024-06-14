import { connectToDB } from "@utils/database";
import Verse from "@models/verse";

//GET
export const GET = async (request, { params }) => {
	try {
		await connectToDB();
		const prompt = await Verse.findById(params.id).populate("creator");
		if (!prompt) return new Response("Verse not found", { status: 404 });
		return new Response(JSON.stringify(prompt), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch all verses", { status: 500 });
	}
};

//PATCH
export const PATCH = async (request, { params }) => {
	// const { prompt, tag } = await request.json();
	// try {
	// 	await connectToDB();
	// 	const existingPrompt = await Prompt.findById(params.id);
	// 	if (!prompt) return new Response("Prompt not found", { status: 404 });
	// 	existingPrompt.prompt = prompt;
	// 	existingPrompt.tag = tag;
	// 	await existingPrompt.save();
	// 	return new Response(JSON.stringify(existingPrompt), { status: 200 });
	// } catch (error) {
	// 	return new Response("failed to update prompt", { status: 500 });
	// }
};

//DELETE
export const DELETE = async (request, { params }) => {
	try {
		await connectToDB();
		await Verse.findByIdAndDelete(params.id);
		return new Response(JSON.stringify("Verse deleted successfully"), {
			status: 200,
		});
	} catch (error) {
		return new Response("failed to delete verse", { status: 500 });
	}
};
