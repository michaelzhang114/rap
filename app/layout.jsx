import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
// import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
	title: "rap",
	description: "rap generator",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head></head>
			<body className="box-border">
				<Provider>
					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
