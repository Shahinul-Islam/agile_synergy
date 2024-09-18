"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function NewsletterSection() {
	const [email, setEmail] = useState("");
	const { toast } = useToast();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically send the email to your backend
		console.log("Subscribing email:", email);
		toast({
			title: "Subscribed!",
			description: "You've successfully subscribed to our newsletter.",
		});
		setEmail("");
	};

	return (
		<section className="py-20 px-6 bg-muted/50">
			<div className="container mx-auto max-w-3xl">
				<Card className="transition-all duration-300 hover:shadow-lg">
					<CardHeader className="text-center">
						<CardTitle className="text-3xl font-bold mb-2">
							Stay Updated
						</CardTitle>
						<CardDescription>
							Subscribe to our newsletter for the latest digital marketing
							trends and tips.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-4"
						>
							<div className="relative flex-grow">
								<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
								<Input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="pl-10"
									required
									aria-label="Email for newsletter"
								/>
							</div>
							<Button type="submit" className="w-full sm:w-auto">
								Subscribe
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
			<Toaster />
		</section>
	);
}
