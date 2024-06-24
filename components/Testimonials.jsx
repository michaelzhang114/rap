import Image from "next/image";
import { artistsList } from "./artists";
import Carousel from "./Carousel";

export default function Testimonials() {
	return (
		<section className="relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 ">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div
						className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
						data-aos="zoom-y-out"
					>
						<h2 className="h2 mb-4">
							Want to write rap lyrics like J Cole, Kendrick,
							Eminem, and others?
						</h2>
						<p className="text-xl">
							Rhyme Machine gives you production-quality verses in
							seconds. And it&apos;s completely free (for now).
						</p>
					</div>

					{/* Items */}
					<div
						className="mx-auto text-center pb-12 md:pb-16"
						data-aos="zoom-y-out"
					>
						<p className="text-xl ">⬅️ Scroll ➡️</p>
						<Carousel options={artistsList} />
					</div>

					{/* Testimonials */}
					<div
						className="max-w-3xl mx-auto mt-20"
						data-aos="zoom-y-out"
					>
						<div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
							{/* Testimonial */}
							<div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
								<div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
									<svg
										className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
										viewBox="0 0 64 64"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
									</svg>
									<Image
										className="relative rounded-full"
										src={"/mz.JPG"}
										width={96}
										height={96}
										alt="Testimonial 01"
									/>
								</div>
								<blockquote className="text-xl font-medium mb-4">
									“ I love this product and would recommend it
									to anyone who needs some bars quickly!
									It&apos;s easy and fun to use! “
								</blockquote>
								<cite className="block font-bold text-lg not-italic mb-1">
									Michael
									<div>
										<span>Up and coming rapper</span>{" "}
									</div>
								</cite>
							</div>
						</div>
					</div>

					<div
						className="max-w-sm mx-auto mt-20"
						data-aos="zoom-y-out"
					>
						<h2 className="h2 mb-4">
							Want to see what Rhyme Machine can do?
						</h2>
						<textarea
							className="textarea textarea-accent mb-4 w-full"
							rows="16"
							placeholder="Bio"
							readOnly
							value={
								"I'm tired of all the fakeness, the lies and deceit,\n" +
								"People smiling in my face then talking behind my back discreet.\n" +
								"I'm fed up with the snakes, the ones who always pretend,\n" +
								"But when it's time to ride, they're nowhere to be a friend.\n" +
								"I'm done with all the haters, trying to bring me down,\n" +
								"They can't stand to see me shine, they want to see me drown.\n" +
								"But I won't let them break me, I'll rise above the hate,\n" +
								"I'll keep grinding, keep shining, show 'em it's never too late."
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
