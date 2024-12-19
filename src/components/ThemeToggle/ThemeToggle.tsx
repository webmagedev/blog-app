'use client';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<string>('light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

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

    return (
        <button
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
            aria-label="Toggle dark mode"
            tabIndex={0}
            onClick={switchTheme}
        >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

export default ThemeToggle;
