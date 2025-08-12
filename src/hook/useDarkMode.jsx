import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState("system");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "system";
        setTheme(savedTheme);
        applyTheme(savedTheme);

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (savedTheme === "system") {
                applyTheme("system");
            }
        };
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const applyTheme = (themeValue) => {
        const isDark =
            themeValue === "dark" ||
            (themeValue === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        document.documentElement.classList.toggle("dark", isDark);
    };

    const updateTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    return [theme, updateTheme];
}
