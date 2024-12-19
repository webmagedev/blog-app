import './globals.css';
import ThemeToggle from '../components/ThemeToggle';
import {ReactNode} from "react";

export const metadata = {
    title: 'Dynamic Blog Platform',
    description: 'A modern blog platform built with Next.js 13, Zustand, and Tailwind CSS.',
};

export default function RootLayout({children}: {
    children: ReactNode;
}) {
    return (
        <html lang="en" className="dark">
        <body className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="flex mb-6 justify-between items-center">
            <h1 className="text-xl font-bold">Blog</h1>
            <ThemeToggle/>
        </header>
        <main>{children}</main>
        </body>
        </html>
    );
}