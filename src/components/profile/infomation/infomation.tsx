import React from "react";
import avt from "../../../assets/img/Bill_Gates.jpg";
import baner from "../../../assets/img/Banner.png";
import clsx from "clsx";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const Infomation: React.FC<Props> = ({ classes }) => {
    return (
        <div className="bg-primary w-full h-full">
            <div className="h-full">
                <div className="h-1/3">
                    <img className="" src={baner}></img>
                </div>
                <div className="relative h-2/3">
                    <div className="h-full">
                        <div
                            className={clsx(
                                classes?.avt_container,
                                "h-fit absolute -top-20 ml-4"
                            )}
                        >
                            <div className={clsx(classes?.avt_round_bg)}>
                                <Avatar
                                    alt=""
                                    src={avt}
                                    sx={{ width: 130, height: 130 }}
                                />
                            </div>

                            <div className="text-primary mt-5 ">
                                <h1 className="text-xl font-semibold">
                                    Bill Gates
                                </h1>
                                <span className="text-xs">
                                    <p>CEO Microsoft</p>
                                    <p>United States</p>
                                    <p>
                                        Microsoft Corporation asdadasd asd asasd
                                        asda sasd
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 hover:bg-slate-300 hover:bg-opacity-15 cursor-pointer rounded-md">
                            <MoreVertIcon className="text-primary" />
                        </div>
                        <div className=" absolute bottom-5 left-5 mt-5">
                            <Stack direction="row" spacing={1}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    className="mr-5 "
                                >
                                    <span className="text-primary_dark">
                                        Follow
                                    </span>
                                </Button>
                                <Button size="small" variant="outlined">
                                    Message
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
