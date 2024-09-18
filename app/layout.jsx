// "use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Digital Marketing Agency",
	description: "Your go-to digital marketing solutions",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex flex-col min-h-screen">
						<Header />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
					<ModeToggle />
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
