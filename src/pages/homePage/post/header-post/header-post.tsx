import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import { InputBase, Box, Avatar } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

export function HeaderPost() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#1D2226" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar src="/path/to/avatar.jpg" alt="User Avatar" />
                </Box>
                <Search sx={{ flexGrow: 1, maxWidth: "600px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                        sx={{
                            backgroundColor: "#38434F",
                            color: "white",
                            width: "100%",
                        }}
                    />
                </Search>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton size="large" color="inherit">
                        <MessageIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
