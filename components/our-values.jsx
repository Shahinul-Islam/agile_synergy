import {
	LightBulbIcon,
	ChartBarIcon,
	UserGroupIcon,
	ShieldCheckIcon,
} from "@heroicons/react/16/solid";

import { RefreshCcwIcon } from "lucide-react";

const values = [
	{
		name: "Innovation in Digital Strategies",
		description:
			"We consistently push the boundaries with cutting-edge digital strategies that keep us ahead of the curve.",
		icon: LightBulbIcon,
	},
	{
		name: "Data-Driven Decision Making",
		description:
			"Our strategies are backed by analytics and data to ensure precise and impactful decisions.",
		icon: ChartBarIcon,
	},
	{
		name: "Continuous Learning and Improvement",
		description:
			"We value growth through constant learning, always striving to improve in every aspect.",
		icon: RefreshCcwIcon,
	},
	{
		name: "Client-Centric Approach",
		description:
			"Our clients are at the heart of everything we do, ensuring tailored and impactful solutions.",
		icon: UserGroupIcon,
	},
	{
		name: "Ethical and Transparent Practices",
		description:
			"We uphold the highest ethical standards, ensuring transparency in all our interactions and work.",
		icon: ShieldCheckIcon,
	},
];

export default function OurValues() {
	return (
		<section className="py-20 px-6 bg-muted/50">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{values.map((value, index) => (
						<div
							key={index}
							className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white p-6 rounded-lg text-center"
						>
							<div className="flex justify-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-full">
									<value.icon className="h-8 w-8 text-primary" />
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-2">{value.name}</h3>
							<p className="text-gray-600">{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
