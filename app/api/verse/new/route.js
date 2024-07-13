import { connectToDB } from "@utils/database";
import Verse from "@models/verse";

export const POST = async (req, res) => {
	const { userId, contents, title } = await req.json();

	try {
		await connectToDB();

		const newVerse = new Verse({ creator: userId, title, contents });
		// making new verse without a user
		// const newVerse = new Verse({ title, contents });

		await newVerse.save();
		return new Response(JSON.stringify(newVerse), { status: 201 });
	} catch (error) {
		return new Response("Failed to create a new verse", { status: 500 });
	}
};
