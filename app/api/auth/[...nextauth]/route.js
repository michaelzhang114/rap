import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

import User from "@models/user";
import { config } from "./auth";

// console.log({
// 	clientId: process.env.GOOGLE_ID,
// 	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth(config);

export { handler as GET, handler as POST };

// const testUser = {
// 	email: "test@example.com",
// 	username: "testuser",
// 	image: "http://example.com/image.png",
// };

// await User.create(testUser);
// console.log("Test user created");
