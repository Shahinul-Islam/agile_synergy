"use client";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
	return (
		<div className="container mx-auto py-20 px-6 space-y-20">
			<section className="text-center">
				<h1 className="text-4xl font-bold mb-6">About DigiMarkPro</h1>
				<p className="text-xl mb-8">
					We are a team of passionate digital marketers dedicated to helping
					businesses thrive in the digital landscape.
				</p>
			</section>

			<section>
				<h2 className="text-3xl font-bold mb-6">Our Mission</h2>
				<p className="mb-4">
					At DigiMarkPro, our mission is to empower businesses with innovative
					digital marketing solutions that drive growth and success in the
					ever-evolving online world.
				</p>
				<Button>Learn More</Button>
			</section>

			<section>
				<h2 className="text-3xl font-bold mb-6">Our Team</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Add team member cards here */}
				</div>
			</section>

			<section>
				<h2 className="text-3xl font-bold mb-6">Our Values</h2>
				<ul className="list-disc list-inside space-y-2">
					<li>Innovation in digital strategies</li>
					<li>Data-driven decision making</li>
					<li>Continuous learning and improvement</li>
					<li>Client-centric approach</li>
					<li>Ethical and transparent practices</li>
				</ul>
			</section>
		</div>
	);
}
