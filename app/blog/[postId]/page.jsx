import { getPostData, getSortedPostsData } from "@lib/posts";
import React from "react";
import { notFound } from "next/navigation";
import { getFormattedDate } from "@lib/getFormattedDate";
import Link from "next/link";

const generateMetadata = ({ params }) => {
	const posts = getSortedPostsData();
	const { postId } = params;

	const post = posts.find((post) => post.id === postId);

	if (!post) {
		return { title: "Post not found" };
	}

	return {
		title: post.title,
		// put other stuff here for SEO
	};
};

const Post = async ({ params }) => {
	const posts = getSortedPostsData();
	const { postId } = params;

	if (!posts.find((post) => post.id === postId)) {
		return notFound();
	}

	const a = await getPostData(postId);
	const { title, date, contentHtml } = await getPostData(postId);
	const pubDate = getFormattedDate(date);

	return (
		<main>
			<h1>{title}</h1>
			<p>{pubDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<p>
					<Link href="/">Back to home</Link>
				</p>
			</article>
		</main>
	);
};

export default Post;
