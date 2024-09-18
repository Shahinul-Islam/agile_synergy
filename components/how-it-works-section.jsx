"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { CheckCircle, Users, BarChart, Rocket } from "lucide-react";

const steps = [
	{
		icon: CheckCircle,
		title: "1. Discovery",
		description:
			"We start by understanding your business goals, target audience, and current digital presence.",
	},
	{
		icon: Users,
		title: "2. Strategy",
		description:
			"Our team develops a tailored digital marketing strategy aligned with your objectives.",
	},
	{
		icon: BarChart,
		title: "3. Implementation",
		description:
			"We execute the strategy across various digital channels, continuously optimizing for best results.",
	},
	{
		icon: Rocket,
		title: "4. Growth",
		description:
			"Monitor performance, analyze data, and scale successful tactics to drive sustainable growth.",
	},
];

export default function HowItWorksSection() {
	return (
		<section className="py-20 px-6 bg-muted/50">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((step, index) => (
						<Card
							key={index}
							className="transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader>
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
									<step.icon className="w-6 h-6 text-primary" />
								</div>
								<CardTitle>{step.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{step.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
