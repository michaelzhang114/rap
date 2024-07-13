import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Testimonials from "@components/Testimonials";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

const Home = () => {
	redirect("/rap-generator");
	return (
		<section>
			{/* <Hero />
			<Testimonials /> */}
		</section>
	);
};

export default Home;
