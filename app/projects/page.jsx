"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
	{
		title: "E-commerce Growth Strategy",
		description:
			"Developed and implemented a comprehensive digital marketing strategy for an e-commerce client, resulting in a 150% increase in online sales.",
		tags: ["SEO", "PPC", "Social Media Marketing"],
	},
	{
		title: "B2B Lead Generation Campaign",
		description:
			"Created a multi-channel lead generation campaign for a B2B software company, generating 500+ qualified leads in 3 months.",
		tags: ["Content Marketing", "Email Marketing", "LinkedIn Ads"],
	},
	// Add more projects as needed
];

export default function ProjectsPage() {
	return (
		<div className="container mx-auto py-20 px-6">
			<h1 className="text-4xl font-bold mb-12 text-center">Our Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<Card
						key={index}
						className="transition-all duration-300 hover:shadow-lg"
					>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag, tagIndex) => (
									<Badge key={tagIndex} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
