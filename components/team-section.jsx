"use client";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
	{
		name: "Alex Johnson",
		role: "CEO & Founder",
		description:
			"With over 15 years of experience in digital marketing, Alex leads our team with innovative strategies and a passion for client success.",
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		name: "Sarah Lee",
		role: "Head of SEO",
		description:
			"Sarah is an SEO expert with a knack for boosting organic traffic and improving search rankings for our clients.",
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		name: "Mike Chen",
		role: "Social Media Strategist",
		description:
			"Mike crafts engaging social media campaigns that connect brands with their target audience and drive meaningful interactions.",
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		name: "Emily Rodriguez",
		role: "Content Marketing Manager",
		description:
			"Emily's creative writing and strategic content planning help our clients establish thought leadership in their industries.",
		image: "/placeholder.svg?height=100&width=100",
	},
];

export default function TeamSection() {
	return (
		<section className="py-20 px-6 bg-muted/50">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							className="transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader className="text-center">
								<Avatar className="w-24 h-24 mx-auto mb-4">
									<AvatarImage src={member.image} alt={member.name} />
									<AvatarFallback>
										{member.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<CardTitle>{member.name}</CardTitle>
								<CardDescription>{member.role}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-center">{member.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
