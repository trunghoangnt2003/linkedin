import { User } from "../../../models/user";
import * as React from "react";

import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AddIcon from "@mui/icons-material/Add";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";
import axios from "axios";

type Props = {
    user: User;
    onDescriptionChange: (newDescription: string) => void;
};

const handlePost = async (user: User, description: string) => {
    await axios
        .post(
            "https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user",
            {
                id: user.id,
                name: user.name,
                email: user.email,
                birth: user.birth,
                phone: user.phone,
                image: user.avatar,
                description: description.trim(),
            }
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const Description: React.FC<Props> = ({ user, onDescriptionChange }) => {
    const [description, setDescription] = React.useState(user.description);
    const [openDesc, setOpenDesc] = React.useState(false);

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    React.useEffect(() => {
        setDescription(user.description);
    }, [user]);

    const handleEdit = () => {
        setOpenDesc(!openDesc);
    };

    const handleSave = () => {
        setDescription(description);
        handlePost(user, description);
        onDescriptionChange(description);
        setOpenDesc(!openDesc);
    };

    return (
        <div className="text-primary w-full">
            <div className="m-4 relative">
                <h1 className="mb-3 font-medium">Description</h1>

                {user.description == null || user.description == "" ? (
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
                        {user.description == null || user.description == "" ? (
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
                            user.description
                        )}
                    </span>
                )}
            </div>
        </div>
    );
};
