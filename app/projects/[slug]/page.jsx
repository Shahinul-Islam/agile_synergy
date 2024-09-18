import { notFound } from "next/navigation"; // New in App Router
// import { useRouter } from "next/router";

// Sample project data (in real applications, fetch from an API or DB)
const projects = [
	{
		title: "E-commerce Growth Strategy",
		description:
			"Developed and implemented a comprehensive digital marketing strategy for an e-commerce client, resulting in a 150% increase in online sales.",
		tags: ["SEO", "PPC", "Social Media Marketing"],
		image: "https://via.placeholder.com/600x400?text=Project+Image",
		slug: "ecommerce-growth-strategy",
		details:
			"This project involved a comprehensive SEO audit, paid search campaigns on Google Ads, and a cohesive social media strategy.",
	},
	{
		title: "B2B Lead Generation Campaign",
		description:
			"Created a multi-channel lead generation campaign for a B2B software company, generating 500+ qualified leads in 3 months.",
		tags: ["Content Marketing", "Email Marketing", "LinkedIn Ads"],
		image: "https://via.placeholder.com/600x400?text=Project+Image",
		slug: "b2b-lead-generation-campaign",
		details:
			"The lead generation campaign focused on content marketing and email outreach, supported by targeted LinkedIn ads.",
	},
];

// Function to get project data based on slug
function getProjectBySlug(slug) {
	return projects.find((project) => project.slug === slug);
}

export default function ProjectDetails({ params }) {
	const project = getProjectBySlug(params.slug);

	// Handle the case where no project is found
	if (!project) {
		notFound(); // This will trigger the Next.js built-in 404 page
	}

	return (
		<div className="container mx-auto py-20 px-6">
			<h1 className="text-4xl font-bold mb-4">{project.title}</h1>
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-64 object-cover rounded-lg mb-6"
			/>
			<p className="text-lg mb-6">{project.details}</p>
			<div className="flex flex-wrap gap-2 mb-4">
				{project.tags.map((tag, index) => (
					<span
						key={index}
						className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-lg"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}
