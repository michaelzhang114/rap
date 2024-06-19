import Feed from "@components/Feed";
import React from "react";

const Profile = () => {
	return (
		<div className="mx-4 my-6">
			<article className="prose lg:prose-xl mb-4">
				<h2>My Profile</h2>
			</article>{" "}
			<Feed></Feed>
		</div>
	);
};

export default Profile;
