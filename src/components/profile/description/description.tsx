import { User } from "../../../models/user";
import * as React from "react";

import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AddIcon from "@mui/icons-material/Add";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";
import axios from "axios";
import { UpdateUser } from "../../../service";

type Props = {
    user: User;
    userProfile: User;
    onDescriptionChange: (newDescription: string) => void;
};

const handlePost = async (user: User, description: string) => {
    user.description = description.trim();
    UpdateUser(user);
};

export const Description: React.FC<Props> = ({
    user,
    onDescriptionChange,
    userProfile,
}) => {
    const [description, setDescription] = React.useState(
        userProfile.description
    );
    const [openDesc, setOpenDesc] = React.useState(false);

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    React.useEffect(() => {
        setDescription(userProfile.description);
    }, [userProfile]);

    const handleEdit = () => {
        setOpenDesc(!openDesc);
    };

    const handleSave = () => {
        setDescription(description);
        handlePost(userProfile, description);
        onDescriptionChange(description);
        setOpenDesc(!openDesc);
    };

    return (
        <div className="text-primary w-full">
            <div className="m-4 relative">
                <h1 className="mb-3 font-medium">Description</h1>
                {user.id === userProfile.id ? (
                    <>
                        {userProfile.description == null ||
                        userProfile.description == "" ? (
                            ""
                        ) : (
                            <div
                                className="absolute top-0 right-0 hover:bg-slate-300 hover:bg-opacity-15 cursor-pointer rounded-md"
                                onClick={handleEdit}
                            >
                                <CreateOutlinedIcon fontSize="small" />
                            </div>
                        )}
                        {openDesc ? (
                            <>
                                <Textarea
                                    style={{ backgroundColor: "lightgray" }}
                                    color="neutral"
                                    minRows={3}
                                    maxRows={3}
                                    size="sm"
                                    placeholder="description"
                                    variant="soft"
                                    onChange={handleChange}
                                    value={description}
                                />
                                <div className="flex justify-end">
                                    <Button
                                        size="small"
                                        variant="contained"
                                        sx={{
                                            mt: 1,
                                            width: 60,
                                            height: 30,
                                            fontSize: 12,
                                        }}
                                        onClick={handleSave}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                        {openDesc ? (
                            ""
                        ) : (
                            <span className=" flex mb-1 text-sm">
                                {userProfile.description == null ||
                                userProfile.description == "" ? (
                                    <div>
                                        <div
                                            className="text-sm flex align-middle text-blue-500 cursor-pointer hover:text-blue-300"
                                            onClick={handleEdit}
                                        >
                                            <AddIcon />{" "}
                                            <span className="m-auto">
                                                Add a description{" "}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    userProfile.description
                                )}
                            </span>
                        )}
                    </>
                ) : (
                    userProfile.description
                )}
            </div>
        </div>
    );
};
