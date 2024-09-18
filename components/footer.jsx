"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-6 px-6 bg-background border-t border-border/40">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0">
					<p>&copy; 2024 DigiMarkPro. All rights reserved.</p>
				</div>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link
								href="/privacy"
								className="hover:text-primary transition-colors"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								href="/terms"
								className="hover:text-primary transition-colors"
							>
								Terms of Service
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
