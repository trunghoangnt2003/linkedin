import clsx from "clsx";
import { User } from "../../models/user";
import WestIcon from "@mui/icons-material/West";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PhoneInput from "react-phone-number-input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { UpdateUser } from "../../service";
type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const EditProfile: React.FC<Props> = ({ classes }) => {
    const id = encodeURIComponent("u#6wVmgUn2fGVQM1m4JQQx1zuAxou2");
    const [user, setUser] = useState<User>({} as User);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?id=` +
                    id
            )
            .then((res) => {
                setUser(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const handleChangePhone = (e) => {
        user.phone = e;
        setUser(user);
    };
    const handleChangeBirth = (e) => {
        if (e == null) return;
        user.birth = e.format("YYYY-MM-DD");
        setUser(user);
    };

    const handleChangeName = (e) => {
        user.name = e.target.value;
        setName(e.target.value);
    };
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const handeleSave = () => {
        console.log("name", name);
        console.log("birth", user.birth);
        console.log("phone", user.phone);

        UpdateUser(user, name, user.birth, user.phone);
        navigate("/profile");
    };

    return (
        <div className="flex justify-center items-center">
            <div className={clsx(classes?.mainContent, "bg-primary")}>
                <div className="flex justify-between bg-primary_dark px-3 py-2">
                    <div className="text-primary text-2xl font-semibold flex items-center">
                        <WestIcon
                            className="hover:bg-slate-300 hover:bg-opacity-15 cursor-pointer rounded-md"
                            onClick={() => navigate("/profile")}
                        />
                        <span className="ml-6">Edit Info</span>
                    </div>
                    <div
                        className="text-primary text-base font-semibold flex items-center p-1
                     hover:bg-slate-300 hover:bg-opacity-15 cursor-pointer rounded-md "
                        onClick={handeleSave}
                    >
                        <span>Save</span>
                    </div>
                </div>
                <div className="mx-3">
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": {
                                width: "100%",
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <ThemeProvider theme={theme}>
                            <TextField
                                focused
                                value={user.name}
                                id="outlined-required"
                                label="Name"
                                color="primary"
                                sx={{
                                    "& > :not(style)": {
                                        width: "100%",
                                        mb: 1,
                                        mt: 2,
                                    },
                                }}
                                onChange={(e) => handleChangeName(e)}
                            />
                            <div className="mb-5">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DemoContainer
                                        components={["DatePicker"]}
                                        sx={{
                                            "& > :not(style)": {
                                                width: "100%",
                                            },
                                        }}
                                    >
                                        <DatePicker
                                            label="Birth of date"
                                            value={dayjs(user.birth)}
                                            onChange={(e) =>
                                                handleChangeBirth(e)
                                            }
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                            <div>
                                <PhoneInput
                                    className={clsx(
                                        classes?.inputPhone,
                                        "bg-primary text-slate-700 rounded-md h-10"
                                    )}
                                    placeholder="Enter phone number"
                                    onChange={(e) => handleChangePhone(e)}
                                    defaultCountry="VN"
                                    limitMaxLength={true}
                                    value={user.phone}
                                />
                            </div>
                        </ThemeProvider>
                    </Box>
                </div>
            </div>
        </div>
    );
};
