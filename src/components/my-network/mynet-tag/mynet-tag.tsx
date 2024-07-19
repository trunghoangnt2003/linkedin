import { Avatar, Button, Stack } from "@mui/material";
import { User } from "../../../models";
import { useNavigate } from "react-router-dom";

type Props = {
    user: User;
    classes?: {
        [key: string]: string;
    };
};
export const MyNetworkTag: React.FC<Props> = ({ classes, user }) => {
    const navigate = useNavigate();
    const handlerNavigateProfile = () => {
        navigate("/profile", { state: { user: user } });
    };

    return (
        <div className="flex my-2">
            <div>
                <Avatar
                    sx={{ width: 45, height: 45 }}
                    src={user.avatar}
                ></Avatar>
            </div>
            <div className="w-full">
                <div className="ml-3 mb-2 text-primary">
                    <span
                        className="font-semibold cursor-pointer"
                        onClick={handlerNavigateProfile}
                    >
                        {user.name}
                    </span>
                    <p className="text-xs opacity-75">{user.description}</p>
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
                        <span className="text-primary_dark">Connect</span>
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
                        Remove
                    </Button>
                </Stack>
                <hr className="opacity-30 my-2"></hr>
            </div>
        </div>
    );
};
