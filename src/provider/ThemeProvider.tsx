import { useState } from "react";
import { ThemeContext, Theme } from "../context/ThremeContext";
import { changeCssRootVariables } from "../modal/ChangeCssRootVariables";
import { storage } from "../modal/Storage";

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

    changeCssRootVariables(theme);
    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
        }} {...props}>{children}
        </ThemeContext.Provider>
    );
};