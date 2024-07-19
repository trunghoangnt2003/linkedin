import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
export interface Props {
    classes?: {
        [key: string]: string;
    };
}
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 2,
    backgroundColor: "#38434f",
    "&:hover": {
        backgroundColor: "#536375",
    },
    color: "#dededf",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //     marginLeft: theme.spacing(3),
    //     width: "auto",
    // },
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
            width: "24ch",
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

export const MyHeader: React.FC<Props> = ({ classes }) => {
    return (
        <div>
            <div className="flex justify-evenly mx-2">
                <div className="mt-4 cursor-pointer">
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
                <div className="mt-4 cursor-pointer">
                    <TextsmsIcon className="text-primary" />
                </div>
            </div>
        </div>
    );
};
