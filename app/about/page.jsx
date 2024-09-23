"use client";

// import { Button } from "@/components/ui/button";
import TeamSection from "@/components/team-section";
import OurValues from "../../components/our-values";
import Link from "next/link";
import WhatWeDo from "../../components/WhatWeDo";
import StatisticsSection from "../../components/StatisticsSection";

export default function AboutPage() {
	return (
		<div className="container mx-auto py-20 px-6 space-y-20">
			<WhatWeDo />
			<StatisticsSection/>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
							Our Mission
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Empowering Businesses Through Digital Innovation
						</h2>
						<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							At our digital agency, we are driven by a deep passion for
							creating transformative digital experiences that drive business
							growth. Our mission is to empower our clients with cutting-edge
							technology, strategic insights, and creative solutions that help
							them thrive in the digital landscape.
						</p>
						<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							We believe that technology is a powerful tool for unlocking new
							possibilities, and we are committed to leveraging it to help our
							clients achieve their goals. From web development and mobile
							applications to digital marketing and data analytics, we offer a
							comprehensive suite of services designed to drive measurable
							results.
						</p>
						<div className="flex justify-start space-x-4">
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Learn More
							</Link>
							<Link
								href="#"
								className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Contact Us
							</Link>
						</div>
					</div>
					<img
						src="/placeholder.svg"
						width="500"
						height="500"
						alt="Our Mission"
						className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
					/>
				</div>
			</section>

			<TeamSection />
			<OurValues />
		</div>
	);
}
