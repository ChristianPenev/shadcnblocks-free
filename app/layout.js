
import "./globals.css";


export const metadata = {
    title: "350+ Free ShadCN UI Blocks - Tailwind CSS Components for Modern Web Projects",
    description: "Discover 350+ free, customizable ShadCN UI blocks built with Tailwind CSS. Perfect for React, Next.js, and modern web apps. Accessible, responsive, and developer-friendly, these components make building stunning UIs effortless.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
