import React from "react";
import { getSortedPostsData } from "@lib/posts";
import ListItem from "./ListItem";

// export async function getStaticProps() {
// 	const allPostsData = getSortedPostsData();
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }

const Posts = () => {
	const posts = getSortedPostsData();
	return (
		<section>
			<div className="mx-auto">
				<ul>
					{posts.map((post) => (
						<ListItem key={post.id} post={post}></ListItem>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Posts;
