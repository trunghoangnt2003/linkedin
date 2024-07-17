import clsx from "clsx";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import PermContactCalendarSharpIcon from "@mui/icons-material/PermContactCalendarSharp";
import { Avatar, Button, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TextsmsIcon from "@mui/icons-material/Textsms";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 13,
    borderRadius: 2,
    border: "1px solid #e8e8e9",
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#1d2226", // Change background color
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 2,
        backgroundColor: theme.palette.mode === "dark" ? "#1a90ff" : "#70b5f9",
    },
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 2,
    backgroundColor: "#38434f",
    "&:hover": {
        backgroundColor: "#536375",
    },
    color: "#dededf",
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const MyNetwork: React.FC<Props> = ({ classes }) => {
    return (
        <div className="flex justify-center items-center  bg-white">
            <div className={clsx(classes?.mainContent, "")}>
                <div className="bg-primary h-24 p-3 flex mb-2">
                    <div className="mx-2 w-3/4">
                        <div className="mb-2">
                            <span className="text-primary text-sm">
                                Build your contacts! 30 is a good start.
                            </span>
                        </div>
                        <div className="">
                            <BorderLinearProgress
                                variant="determinate"
                                value={(1 / 30) * 100}
                                className="my-1"
                            />
                            <div className="flex justify-between text-xs">
                                <span className="text-my-blue ">
                                    1 Connection
                                </span>
                                <span className="text-primary opacity-85">
                                    29 remaining
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(classes?.vborder, "mx-2")}></div>
                    <div className="w-1/4 text-center my-auto">
                        <div>
                            <PermContactCalendarSharpIcon className="text-primary" />
                        </div>
                        <span className="text-primary text-sm opacity-90">
                            Add contacts
                        </span>
                    </div>
                </div>
                <div className="bg-primary h-full">
                    <div className="flex justify-evenly mx-2">
                        <div className="mt-4">
                            <Avatar sx={{ width: 35, height: 35 }} />
                        </div>
                        <div className="mt-4">
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon className="text-primary" />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    className="text-primary_lights h-8"
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                        </div>
                        <div className="mt-4">
                            <TextsmsIcon className="text-primary" />
                        </div>
                    </div>
                    <hr className="opacity-30 my-2"></hr>
                    <div className="ml-8">
                        <span className="text-primary font-semibold text-sm">
                            People you may know
                        </span>
                        <div>
                            <div className="flex my-2">
                                <div>
                                    <Avatar
                                        sx={{ width: 45, height: 45 }}
                                    ></Avatar>
                                </div>
                                <div className="w-full">
                                    <div className="ml-3 mb-2 text-primary">
                                        <span className="font-semibold">
                                            name
                                        </span>
                                        <p className="text-xs opacity-75">
                                            manager
                                        </p>
                                    </div>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            className="mr-5 "
                                            sx={{
                                                backgroundColor: "#70b5f9",
                                                "&:hover": {
                                                    backgroundColor: "#5a9ee3",
                                                },
                                                border: "1px solid #000000",
                                                color: "#primary_dark",
                                                fontWeight: "bold",
                                                fontSize: "13px",
                                                borderRadius: "40px",
                                            }}
                                        >
                                            <span className="text-primary_dark">
                                                Follow
                                            </span>
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                border: "1px solid #dededf",
                                                color: "#dededf",
                                                fontSize: "13px",
                                                borderRadius: "40px",
                                            }}
                                        >
                                            Message
                                        </Button>
                                    </Stack>
                                    <hr className="opacity-30 my-2"></hr>
                                </div>
                            </div>
                            <div className="flex my-2">
                                <div>
                                    <Avatar
                                        sx={{ width: 45, height: 45 }}
                                    ></Avatar>
                                </div>
                                <div className="w-full">
                                    <div className="ml-3 mb-2 text-primary">
                                        <span className="font-semibold">
                                            name
                                        </span>
                                        <p className="text-xs opacity-75">
                                            manager
                                        </p>
                                    </div>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            className="mr-5 "
                                            sx={{
                                                backgroundColor: "#70b5f9",
                                                "&:hover": {
                                                    backgroundColor: "#5a9ee3",
                                                },
                                                border: "1px solid #000000",
                                                color: "#primary_dark",
                                                fontWeight: "bold",
                                                fontSize: "13px",
                                                borderRadius: "40px",
                                            }}
                                        >
                                            <span className="text-primary_dark">
                                                Follow
                                            </span>
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                border: "1px solid #dededf",
                                                color: "#dededf",
                                                fontSize: "13px",
                                                borderRadius: "40px",
                                            }}
                                        >
                                            Message
                                        </Button>
                                    </Stack>
                                    <hr className="opacity-30 my-2"></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
