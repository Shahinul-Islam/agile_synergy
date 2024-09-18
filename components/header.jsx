"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					DigiMarkPro
				</Link>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link href="/" className="hover:text-primary transition-colors">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-primary transition-colors"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/projects"
								className="hover:text-primary transition-colors"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-primary transition-colors"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<Button>Get Started</Button>
			</div>
		</header>
	);
}
