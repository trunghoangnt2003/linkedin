//
// src/context/ThemeContext.tsx
import React, { createContext, ReactNode } from "react";
import { darkTheme } from "../assets/mode/theme";

interface ThemeContextType {
    theme: any; // Adjust type as per your actual theme type
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <ThemeContext.Provider value={{ theme: darkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
