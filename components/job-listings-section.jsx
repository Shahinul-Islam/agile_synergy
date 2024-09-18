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
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobListings = [
	{
		title: "Senior Digital Marketing Specialist",
		description:
			"Lead digital marketing campaigns and strategies for our top-tier clients.",
		location: "New York, NY",
		type: "Full-time",
		department: "Marketing",
	},
	{
		title: "SEO Content Writer",
		description:
			"Create engaging, SEO-optimized content for various industry niches.",
		location: "Remote",
		type: "Contract",
		department: "Content",
	},
	{
		title: "Social Media Manager",
		description:
			"Develop and execute social media strategies across multiple platforms.",
		location: "Los Angeles, CA",
		type: "Full-time",
		department: "Social Media",
	},
	{
		title: "PPC Specialist",
		description: "Manage and optimize pay-per-click campaigns for maximum ROI.",
		location: "Chicago, IL",
		type: "Full-time",
		department: "Advertising",
	},
];

export default function JobListingsSection() {
	return (
		<section className="py-20 px-6 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Join Our Team</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{jobListings.map((job, index) => (
						<Card
							key={index}
							className="transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader>
								<CardTitle className="text-xl">{job.title}</CardTitle>
								<CardDescription>{job.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
									<div className="flex items-center">
										<MapPin className="w-4 h-4 mr-2" />
										{job.location}
									</div>
									<div className="flex items-center">
										<Clock className="w-4 h-4 mr-2" />
										{job.type}
									</div>
									<div className="flex items-center">
										<Briefcase className="w-4 h-4 mr-2" />
										{job.department}
									</div>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between items-center">
								<Badge variant="secondary">{job.department}</Badge>
								<Button variant="outline">Apply Now</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
