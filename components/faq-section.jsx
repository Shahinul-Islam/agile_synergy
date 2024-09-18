"use client";

import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What services does your digital marketing agency offer?",
		answer:
			"Our agency offers a comprehensive range of digital marketing services including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, and web design and development.",
	},
	{
		question: "How do you measure the success of your marketing campaigns?",
		answer:
			"We use a variety of metrics to measure success, including website traffic, conversion rates, engagement rates, return on ad spend (ROAS), and overall return on investment (ROI). We provide regular reports and analytics to our clients to showcase the performance of their campaigns.",
	},
	{
		question:
			"How long does it take to see results from digital marketing efforts?",
		answer:
			"The timeline for results can vary depending on the specific strategies and channels used. Some efforts, like PPC advertising, can show immediate results, while others, like SEO, may take several months to see significant improvements. We work with our clients to set realistic expectations and provide regular updates on progress.",
	},
	{
		question:
			"Do you offer customized marketing strategies for different industries?",
		answer:
			"Yes, we understand that each industry and business has unique needs and challenges. We develop customized marketing strategies tailored to your specific industry, target audience, and business goals to ensure the best possible results.",
	},
	{
		question:
			"How do you stay up-to-date with the latest digital marketing trends?",
		answer:
			"Our team is committed to continuous learning and professional development. We regularly attend industry conferences, participate in webinars, and stay informed about updates from major platforms like Google and Facebook. This ensures that our strategies always incorporate the latest best practices and innovations in digital marketing.",
	},
];

export default function FAQSection() {
	const [openItems, setOpenItems] = useState(new Set());

	const toggleItem = (value) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(value)) {
			newOpenItems.delete(value);
		} else {
			newOpenItems.add(value);
		}
		setOpenItems(newOpenItems);
	};

	return (
		<section className="py-20 px-6 bg-background">
			<div className="container mx-auto max-w-3xl">
				<h2 className="text-3xl font-bold text-center mb-12">
					Frequently Asked Questions
				</h2>
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger
								onClick={() => toggleItem(`item-${index}`)}
								className="text-left"
							>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>
								<p className="text-muted-foreground">{faq.answer}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
