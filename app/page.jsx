// "use client";

import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import BenefitsSection from "@/components/benefits-section";
import HowItWorksSection from "@/components/how-it-works-section";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import NewsletterSection from "@/components/newsletter-section";
import FAQSection from "@/components/faq-section";
import TeamSection from "@/components/team-section";
import JobListingsSection from "@/components/job-listings-section";

export default function Home() {
	return (
		<div className="space-y-20 py-10">
			<HeroSection />
			<FeaturesSection />
			<BenefitsSection />
			<HowItWorksSection />
			<PricingSection />
			<CTASection />
			<NewsletterSection />
			<FAQSection />
			<TeamSection />
			<JobListingsSection />
		</div>
	);
}
