import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-16">
						<p
							className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-normal mb-4"
							data-aos="zoom-y-out"
						>
							Write Rap Lyrics
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
								Fast
							</span>
						</p>

						<div className="max-w-3xl mx-auto">
							<h1
								className="text-xl text-gray-400 mb-8"
								data-aos="zoom-y-out"
								data-aos-delay="150"
							>
								Rhyme Machine uses AI to generate rap lyrics in
								the style of your favorite artist.
							</h1>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<div>
									<Link
										// className="btn btn-accent hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
										className="btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full mb-4 sm:w-auto sm:mb-0"
										href="/create-verse"
									>
										Start (it&apos;s free!)
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
