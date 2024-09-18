"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Placeholder image URL
const placeholderImage =
	"https://via.placeholder.com/600x400?text=Project+Image";

const projects = [
	{
		title: "E-commerce Growth Strategy",
		description:
			"Developed and implemented a comprehensive digital marketing strategy for an e-commerce client, resulting in a 150% increase in online sales.",
		tags: ["SEO", "PPC", "Social Media Marketing"],
		image: placeholderImage, // Placeholder image
		slug: "ecommerce-growth-strategy", // For dynamic route
	},
	{
		title: "B2B Lead Generation Campaign",
		description:
			"Created a multi-channel lead generation campaign for a B2B software company, generating 500+ qualified leads in 3 months.",
		tags: ["Content Marketing", "Email Marketing", "LinkedIn Ads"],
		image: placeholderImage, // Placeholder image
		slug: "b2b-lead-generation-campaign", // For dynamic route
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
						{/* Image at the top of the card */}
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-48 object-cover rounded-t-lg"
						/>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tags.map((tag, tagIndex) => (
									<Badge key={tagIndex} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter>
							<Link href={`/projects/${project.slug}`}>
								<span className="text-primary font-semibold hover:underline bg-slate-500/20 p-2 rounded-md">
									Details
								</span>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
