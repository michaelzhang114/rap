import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { AOSInit } from "@components/aos";

// import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
	title: "Rhyme Machine",
	description: "Rhyme Machine - Write Rap Bars Fast",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head></head>
			<AOSInit />
			<body className="box-border">
				<Provider>
					<main className="app">
						<Nav />
						<div className="container mx-auto max-w-full sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-6xl">
							{children}
						</div>
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
