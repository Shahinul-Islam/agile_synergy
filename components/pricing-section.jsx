"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
	{
		name: "Starter",
		price: "$499",
		description:
			"Perfect for small businesses just getting started with digital marketing.",
		features: [
			"Social Media Management (2 platforms)",
			"Basic SEO Optimization",
			"Monthly Performance Report",
			"Email Support",
		],
	},
	{
		name: "Professional",
		price: "$999",
		description:
			"Ideal for growing businesses looking to expand their online presence.",
		features: [
			"Social Media Management (4 platforms)",
			"Advanced SEO Optimization",
			"Content Marketing (2 blog posts/month)",
			"Google Ads Management",
			"Bi-weekly Performance Reports",
			"Email and Phone Support",
		],
	},
	{
		name: "Enterprise",
		price: "Custom",
		description:
			"Tailored solutions for large businesses with complex marketing needs.",
		features: [
			"Comprehensive Digital Marketing Strategy",
			"Social Media Management (All major platforms)",
			"Advanced SEO and Content Marketing",
			"PPC Campaign Management",
			"Custom Reporting Dashboard",
			"Dedicated Account Manager",
			"24/7 Priority Support",
		],
	},
];

export default function PricingSection() {
	return (
		<section className="py-20 px-6 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{pricingPlans.map((plan, index) => (
						<Card
							key={index}
							className="flex flex-col transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader>
								<CardTitle className="text-2xl">{plan.name}</CardTitle>
								<CardDescription className="text-3xl font-bold">
									{plan.price}
								</CardDescription>
								<p className="text-sm text-muted-foreground mt-2">
									{plan.description}
								</p>
							</CardHeader>
							<CardContent className="flex-grow">
								<ul className="space-y-2">
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center">
											<Check className="w-5 h-5 text-primary mr-2" />
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full"
									variant={index === 1 ? "default" : "outline"}
								>
									{index === 2 ? "Contact Us" : "Get Started"}
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
