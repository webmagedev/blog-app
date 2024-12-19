'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
            aria-label="Toggle dark mode"
        >
            {theme === 'light' ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </button>
    );
};

export default ThemeToggle;
