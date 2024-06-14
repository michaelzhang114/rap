import { connectToDB } from "@utils/database";
import Verse from "@models/verse";

export const GET = async (req, res) => {
	// const { userId, contents, title } = await req.json();

	try {
		await connectToDB();
		console.log("connected");
		const verses = await Verse.find({}).populate("creator");
		// const newVerse = new Verse({ creator: userId, title, contents });
		// await newVerse.save();
		return new Response(JSON.stringify(verses), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch all verses", { status: 500 });
	}
};
