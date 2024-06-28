import React from "react";
import { getFormattedDate } from "@lib/getFormattedDate";
import Link from "next/link";

const ListItem = ({ post }) => {
	const { id, title, date } = post;
	const formattedDate = getFormattedDate(date);
	return (
		<li>
			<Link href={`/blog/${id}`}>{title}</Link>
			<br />
			<p>{formattedDate}</p>
		</li>
	);
};

export default ListItem;
