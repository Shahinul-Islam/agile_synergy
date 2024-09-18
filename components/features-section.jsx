"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users } from "lucide-react";

const features = [
	{
		icon: Lightbulb,
		title: "Innovative Strategies",
		description:
			"We develop cutting-edge marketing strategies tailored to your unique business needs.",
	},
	{
		icon: TrendingUp,
		title: "Data-Driven Approach",
		description:
			"Our decisions are backed by comprehensive data analysis and market insights.",
	},
	{
		icon: Users,
		title: "Expert Team",
		description:
			"Our team of seasoned professionals brings years of industry experience to your projects.",
	},
];

export default function FeaturesSection() {
	return (
		<section className="py-20 px-6 bg-muted/50">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader>
								<feature.icon className="w-12 h-12 mb-4 text-primary" />
								<CardTitle>{feature.title}</CardTitle>
								<CardDescription>{feature.description}</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
