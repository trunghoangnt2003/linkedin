import CakeIcon from "@mui/icons-material/Cake";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { User } from "../../../models/user";
import AddIcon from "@mui/icons-material/Add";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
type Props = {
    user: User;
    classes?: {
        [key: string]: string;
    };
};

export const Contact: React.FC<Props> = ({ classes, user }) => {
    console.log(user);
    return (
        <div className="text-primary w-full">
            <div className="m-4 relative">
                <h1 className="mb-3 font-medium">Contact</h1>
                {user.birth != null && user.email != null && user.phone ? (
                    ""
                ) : (
                    <div className="absolute top-0 right-0 hover:bg-slate-300 hover:bg-opacity-15 cursor-pointer rounded-md">
                        <CreateOutlinedIcon fontSize="small" />
                    </div>
                )}
                <span className="text-center flex mb-1 text-sm">
                    <CakeIcon fontSize="small" /> &nbsp;
                    <input
                        type="date"
                        className="bg-gray-200 text-black rounded"
                    />
                    {user.birth == null || user.birth == "" ? (
                        <div>
                            <div className="text-xs flex align-bottom text-blue-500 cursor-pointer hover:text-blue-300 text-end">
                                <AddIcon fontSize="small" />
                                <span className="text-end m-auto">
                                    Add a birthday
                                </span>
                            </div>
                        </div>
                    ) : (
                        <span>{user.birth}</span>
                    )}
                </span>
                <span className="text-center flex mb-1 text-sm">
                    <AlternateEmailIcon fontSize="small" /> &nbsp;
                    {user.email == null || user.email == "" ? (
                        <div>
                            <div className="text-xs flex align-bottom text-blue-500 cursor-pointer hover:text-blue-300 text-end">
                                <AddIcon fontSize="small" />
                                <span className="text-end m-auto">
                                    Add Email
                                </span>
                            </div>
                        </div>
                    ) : (
                        user.email
                    )}
                </span>
                <span className="text-center flex mb-1 text-sm">
                    <PhoneIcon fontSize="small" /> &nbsp;
                    {user.phone == null || user.phone == "" ? (
                        <div>
                            <div className="text-xs flex align-bottom text-blue-500 cursor-pointer hover:text-blue-300 text-end">
                                <AddIcon fontSize="small" />
                                <span className="text-end m-auto">
                                    Add phone
                                </span>
                            </div>
                        </div>
                    ) : (
                        user.phone
                    )}{" "}
                    {user.phone}
                </span>
            </div>
        </div>
    );
};
