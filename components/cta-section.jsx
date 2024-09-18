"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
	return (
		<section className="py-20 px-6 bg-primary text-primary-foreground">
			<div className="container mx-auto max-w-4xl text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Ready to Boost Your Digital Presence?
				</h2>
				<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
					Take your business to the next level with our expert digital marketing
					strategies. Lets create a tailored plan that drives results and
					maximizes your ROI.
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
					<Button size="lg" variant="secondary" className="w-full sm:w-auto">
						Get Started
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
					<Button size="lg" variant="outline" className="w-full sm:w-auto">
						Schedule a Consultation
					</Button>
				</div>
			</div>
		</section>
	);
}
