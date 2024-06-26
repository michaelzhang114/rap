"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const VerseCard = ({ verse, handleTagClick, handleEdit, handleDelete }) => {
	const { data: session } = useSession();
	const pathName = usePathname();
	const router = useRouter();

	const [copied, setCopied] = useState("");

	const handleCopy = () => {
		setCopied(verse.contents);
		navigator.clipboard.writeText(verse.contents);
		setTimeout(() => {
			setCopied("");
		}, 3000);
	};

	return (
		<div>
			<div
				className="card card-compact bg-base-100 shadow-l image-full mx-2 my-2"
				data-aos="zoom-y-out"
			>
				<div className="card-body">
					<h3 className="card-title">{verse.title}</h3>
					<textarea
						className="textarea"
						value={verse.contents}
						readOnly
						rows="8"
						cols="30"
					/>
					<div className="card-actions justify-end">
						{/* <Image
							src={verse.creator.image}
							alt="user_image"
							width={40}
							height={40}
							className="rounded-full object-contain"
						/> */}
						{/* <button className="btn btn-primary">Buy Now</button> */}
						{session?.user.id === verse.creator._id &&
							pathName === "/profile" && (
								<div className="flex-center">
									{/* <button
										onClick={() => {}}
										className="btn btn-outline btn-primary btn-sm"
									>
										Edit
									</button> */}

									<button
										onClick={handleDelete}
										className="btn btn-outline btn-error btn-sm"
									>
										Delete
									</button>
								</div>
							)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerseCard;
