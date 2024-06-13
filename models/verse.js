import { Schema, model, models } from "mongoose";

const VerseSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	title: {
		type: String,
		required: [true, "title is required."],
	},
	contents: {
		type: String,
		required: [true, "contents is required"],
	},
});

const Verse = models.Verse || model("Verse", VerseSchema);

export default Verse;
