"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);

	useEffect(() => {
		const setUpProviders = async () => {
			const response = await getProviders();
			setProviders(response);
		};
		setUpProviders();
	}, []);

	return (
		<div className="navbar bg-neutral">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl" href="/">
					Rap ting
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					{session?.user ? (
						<>
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src={session?.user.image}
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									{/* <a>Generate Verse</a> */}
									<Link href="/create-verse">
										Generate Verse
									</Link>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a
										onClick={() => {
											signOut();
										}}
									>
										Logout
									</a>
								</li>
							</ul>
						</>
					) : (
						<>
							{providers &&
								Object.values(providers).map((provider) => (
									<button
										className="btn btn-primary"
										key={provider.name}
										onClick={() => signIn(provider.id)}
									>
										Sign In
									</button>
								))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
