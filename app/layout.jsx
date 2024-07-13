import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { AOSInit } from "@components/aos";
import Footer from "@components/Footer";
import GoogleAnalytics from "@components/GoogleAnalytics";

// import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
	title: "Rap Lyrics Generator & Maker - Rhyme Machine",
	description:
		"Generate rap lyrics in the style of J Cole or Kendrick in seconds with Rhyme Machine's AI-powered rap generator. Fast, fun, and free.",
	name: "google-site-verification",
	content: "09GzJY96n56J9BnzBFUnHK20HZ-8nBcKVHRO29VVl_c",
	openGraph: {
		title: "Rap Lyrics Generator & Maker - Rhyme Machine",
		description:
			"Generate rap lyrics in the style of J Cole or Kendrick in seconds with Rhyme Machine's AI-powered rap generator. Fast, fun, and free.",
		url: "https://www.rhymemachine.com",
		siteName: "Rhyme Machine",
		locale: "en_US",
		type: "website",
	},
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head></head>
			<AOSInit />
			<GoogleAnalytics />
			<body className="box-border">
				<Provider>
					<main className="app">
						<Nav />
						<div className="container mx-auto max-w-full px-1 md:px-3 lg:px-8">
							{children}
						</div>
						<Footer />
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
//sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-6xl
