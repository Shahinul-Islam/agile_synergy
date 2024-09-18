"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { BarChart, Target, Zap, Globe } from "lucide-react";

const benefits = [
	{
		icon: BarChart,
		title: "Increased ROI",
		description:
			"Our data-driven strategies ensure you get the most out of your marketing budget, maximizing your return on investment.",
	},
	{
		icon: Target,
		title: "Targeted Reach",
		description:
			"We help you reach your ideal audience with precision, increasing engagement and conversion rates.",
	},
	{
		icon: Zap,
		title: "Faster Growth",
		description:
			"Our proven techniques accelerate your business growth, helping you achieve your goals quicker.",
	},
	{
		icon: Globe,
		title: "Brand Visibility",
		description:
			"Enhance your online presence and become a recognized leader in your industry with our branding strategies.",
	},
];

export default function BenefitsSection() {
	return (
		<section className="py-20 px-6 bg-muted">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Benefits of Working With Us
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className="transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader>
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
									<benefit.icon className="w-6 h-6 text-primary" />
								</div>
								<CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
								<CardDescription>{benefit.description}</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
