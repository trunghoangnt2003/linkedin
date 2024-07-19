// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#121212",
            paper: "#364D66",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0b0b0",
        },
    },
});
