import { useState } from "react";
import { ThemeContext } from "../context/ThremeContext";

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<string>('light');

    function changeTheme(theme: string) {
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
        }} {...props}>{children}
        </ThemeContext.Provider>
    );
};