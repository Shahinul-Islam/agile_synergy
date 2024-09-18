// components/theme-provider.jsx

"use client"; // Ensure this is a client-side component

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</NextThemesProvider>
	);
}
