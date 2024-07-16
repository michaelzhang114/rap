import React from "react";
import Image from "next/image";
import styles from "./howitworks.module.css";

const HowItWorks = () => {
	return (
		<section>
			<article className="prose lg:prose-xl">
				<h2>Why settle for writer's block?</h2>
			</article>

			<br />

			<Image
				src={"/landing/4.jpg"}
				alt=""
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: "100%", height: "auto" }} // optional
			/>
			<br />
			<article className="prose lg:prose-xl text-center max-w-none">
				<p>
					Rhyme Machine is your secret weapon in crafting hard-hitting
					verses, catchy hooks, and unforgettable punchlines.
				</p>
			</article>
		</section>
	);
};

export default HowItWorks;
