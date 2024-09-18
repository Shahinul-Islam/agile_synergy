"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="py-20 px-6">
			<div className="container mx-auto text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
					Elevate Your Digital Presence
				</h1>
				<p className="text-xl mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
					We craft innovative digital marketing strategies to boost your brands
					online visibility and growth.
				</p>
				<Button
					size="lg"
					className="animate-in fade-in slide-in-from-bottom duration-1000 delay-300"
				>
					Get Started
				</Button>
			</div>
		</section>
	);
}
