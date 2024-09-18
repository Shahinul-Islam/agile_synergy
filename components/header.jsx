"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Correct Heroicons imports

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					DigiMarkPro
				</Link>

				{/* Hamburger button for mobile */}
				<button
					className="block sm:hidden text-primary focus:outline-none"
					onClick={toggleMenu}
				>
					{isOpen ? (
						<XMarkIcon className="h-6 w-6" /> // Close icon when open
					) : (
						<Bars3Icon className="h-6 w-6" /> // Hamburger icon when closed
					)}
				</button>

				{/* Navigation for larger screens */}
				<nav className="hidden sm:flex space-x-4">
					<Link href="/" className="hover:text-primary transition-colors">
						Home
					</Link>
					<Link href="/about" className="hover:text-primary transition-colors">
						About
					</Link>
					<Link
						href="/projects"
						className="hover:text-primary transition-colors"
					>
						Projects
					</Link>
					<Link
						href="/contact"
						className="hover:text-primary transition-colors"
					>
						Contact
					</Link>
				</nav>

				{/* Get Started button for larger screens */}
				<div className="hidden sm:block">
					<Button>Get Started</Button>
				</div>
			</div>

			{/* Mobile navigation menu */}
			{isOpen && (
				<nav className="sm:hidden mt-4">
					<ul className="flex flex-col space-y-2">
						<li>
							<Link
								href="/"
								className="block py-2 text-primary hover:bg-background transition-colors"
								onClick={toggleMenu} // Close the menu on link click
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="block py-2 text-primary hover:bg-background transition-colors"
								onClick={toggleMenu}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/projects"
								className="block py-2 text-primary hover:bg-background transition-colors"
								onClick={toggleMenu}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="block py-2 text-primary hover:bg-background transition-colors"
								onClick={toggleMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
					<div className="mt-4">
						<Button onClick={toggleMenu}>Get Started</Button>
					</div>
				</nav>
			)}
		</header>
	);
}
