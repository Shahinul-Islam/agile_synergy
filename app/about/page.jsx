"use client";

import { Button } from "@/components/ui/button";
import TeamSection from "@/components/team-section";
import OurValues from "../../components/our-values";

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

			<section className="relative bg-gray-50 py-16 px-6 sm:px-12 md:px-24 lg:px-48 text-center overflow-hidden">
				<div className="absolute inset-0 z-0"></div>

				<div className="relative z-10 max-w-4xl mx-auto animate-fadeIn">
					<h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-slideInUp">
						Our Mission
					</h2>
					<p className="text-lg text-gray-600 mb-8 animate-fadeIn delay-100">
						At DigiMarkPro, our mission is to empower businesses with innovative
						digital marketing solutions that drive growth and success in the
						ever-evolving online world.
					</p>
					<Button className="px-6 py-3 text-white bg-primary hover:bg-primary/90 transition-all rounded-lg animate-fadeIn delay-200">
						Learn More
					</Button>
				</div>

				<style>{`
					.animate-fadeIn {
						animation: fadeIn 1.5s ease-in-out;
					}
					.animate-slideInUp {
						animation: slideInUp 1.2s ease-in-out;
					}
					.delay-100 {
						animation-delay: 0.1s;
					}
					.delay-200 {
						animation-delay: 0.2s;
					}

					@keyframes fadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes slideInUp {
						from {
							transform: translateY(30px);
							opacity: 0;
						}
						to {
							transform: translateY(0);
							opacity: 1;
						}
					}
				`}</style>
			</section>

			<TeamSection />
			<OurValues />
		</div>
	);
}
