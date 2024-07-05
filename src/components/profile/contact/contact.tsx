import CakeIcon from "@mui/icons-material/Cake";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { User } from "../../../models/user";
import AddIcon from "@mui/icons-material/Add";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import React from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { UpdateBirth, UpdatePhone } from "../../../service";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import clsx from "clsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
type Props = {
    user: User;
    userProfile: User;
    classes?: {
        [key: string]: string;
    };
};

export const Contact: React.FC<Props> = ({ classes, user, userProfile }) => {
    const [birth, setBirth] = React.useState(user.birth || "");
    const [phone, setPhone] = React.useState(user.phone || "");
    const [openPhone, setOpenPhone] = React.useState(false);
    const [openDatePicker, setOpenDatePicker] = React.useState(false);

    const handleOpenDatePicker = () => {
        setOpenDatePicker(!openDatePicker);
    };
    const handleChangeBirth = (e) => {
        console.log(e);
        setBirth(e.format("YYYY-MM-DD"));
    };
    const updateBirth = () => {
        setOpenDatePicker(false);
        if (userProfile.birth === birth) return;
        if (birth == null || birth == "") return;
        UpdateBirth(userProfile, birth);
        userProfile.birth = birth;
    };

    const handleChangePhone = (e) => {
        setPhone(e);
    };

    const handleOpenPhone = () => {
        setOpenPhone(!openPhone);
    };

    const updatePhone = () => {
        setOpenPhone(false);
        if (userProfile.phone === phone) return;
        if (phone == null || phone == "") return;
        UpdatePhone(userProfile, phone);
        userProfile.phone = phone;
    };

    const updateAll = () => {
        handleOpenDatePicker();
        handleOpenPhone();
    };
    return (
        <div className="text-primary w-full">
            <div className="m-4 relative">
                <h1 className="mb-3 font-medium">Contact</h1>

                {/* {user.birth != null && user.email != null && user.phone ? (
                    ""
                ) : ( */}
                {/* <div
                    className="absolute top-0 right-0 hover:bg-slate-300 hover:bg-opacity-15 cursor-pointer rounded-md"
                    onClick={updateAll}
                >
                    <CreateOutlinedIcon fontSize="small" />
                </div> */}
                {/* )} */}
                <div className="h-7">
                    <span className="text-center flex text-sm ">
                        <CakeIcon fontSize="small" className="mr-2" />
                        {user.id === userProfile.id ? (
                            <>
                                {openDatePicker ? (
                                    <>
                                        <ClickAwayListener
                                            onClickAway={updateBirth}
                                        >
                                            <div
                                                className={clsx(
                                                    classes?.datePickerContainer,
                                                    ""
                                                )}
                                            >
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDayjs}
                                                >
                                                    <DemoContainer
                                                        components={[
                                                            "DatePicker",
                                                        ]}
                                                        sx={{
                                                            "& > :not(style)": {
                                                                width: "100%",
                                                            },
                                                        }}
                                                    >
                                                        <DatePicker
                                                            className={clsx(
                                                                classes?.datePicker
                                                            )}
                                                            onChange={(e) =>
                                                                handleChangeBirth(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </div>
                                        </ClickAwayListener>
                                    </>
                                ) : (
                                    <>
                                        {userProfile.birth == null ||
                                        userProfile.birth == "" ? (
                                            <div>
                                                <div
                                                    className="text-xs flex align-bottom text-blue-500 cursor-pointer hover:text-blue-300 text-end"
                                                    onClick={
                                                        handleOpenDatePicker
                                                    }
                                                >
                                                    <AddIcon fontSize="small" />
                                                    <span className="text-end m-auto">
                                                        Add a birthday
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <span>{userProfile.birth}</span>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <span>{userProfile.birth}</span>
                        )}
                    </span>
                </div>
                <div className="h-7">
                    <span className="text-center flex mb-2 text-sm">
                        <AlternateEmailIcon fontSize="small" className="mr-2" />

                        {userProfile.email == null ||
                        userProfile.email == "" ? (
                            <div>
                                <div className="text-xs flex align-bottom text-blue-500 cursor-pointer hover:text-blue-300 text-end">
                                    <AddIcon fontSize="small" />
                                    <span className="text-end m-auto">
                                        Add Email
                                    </span>
                                </div>
                            </div>
                        ) : (
                            userProfile.email
                        )}
                    </span>
                </div>
                <div className="h-7">
                    <span className="text-center flex mb-2 text-sm">
                        {userProfile.id === user.id ? (
                            <>
                                {openPhone ? (
                                    <>
                                        <ClickAwayListener
                                            onClickAway={updatePhone}
                                        >
                                            <div>
                                                <PhoneInput
                                                    className={clsx(
                                                        classes?.inputPhone,
                                                        "bg-primary text-slate-700 rounded-md h-6"
                                                    )}
                                                    placeholder="Enter phone number"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        handleChangePhone(e)
                                                    }
                                                    defaultCountry="VN"
                                                    limitMaxLength={true}
                                                />
                                            </div>
                                        </ClickAwayListener>
                                    </>
                                ) : (
                                    <>
                                        <PhoneIcon
                                            fontSize="small"
                                            className="mr-2"
                                        />
                                        {userProfile.phone == null ||
                                        userProfile.phone == "" ? (
                                            <div>
                                                <div
                                                    className="text-xs flex align-bottom text-blue-500 cursor-pointer hover:text-blue-300 text-end"
                                                    onClick={handleOpenPhone}
                                                >
                                                    <AddIcon fontSize="small" />
                                                    <span className="text-end m-auto">
                                                        Add phone
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            userProfile.phone
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <PhoneIcon fontSize="small" className="mr-2" />
                                <span>{userProfile.phone}</span>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};
