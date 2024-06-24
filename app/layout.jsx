import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { AOSInit } from "@components/aos";
import Footer from "@components/Footer";

// import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
	title: "Rhyme Machine",
	description: "Rhyme Machine - Write Rap Bars Fast",
	name: "google-site-verification",
	conten: "09GzJY96n56J9BnzBFUnHK20HZ-8nBcKVHRO29VVl_c",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				{/* <meta
					name="google-site-verification"
					content="09GzJY96n56J9BnzBFUnHK20HZ-8nBcKVHRO29VVl_c"
				/> */}
			</head>
			<AOSInit />
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

				{/* {Simple Analytics} */}
				<script
					async
					defer
					src="https://scripts.simpleanalyticscdn.com/latest.js"
				></script>
				<noscript>
					<img
						src="https://queue.simpleanalyticscdn.com/noscript.gif"
						alt=""
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</noscript>
			</body>
		</html>
	);
};

export default RootLayout;
//sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-6xl
