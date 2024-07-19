import clsx from "clsx";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import PermContactCalendarSharpIcon from "@mui/icons-material/PermContactCalendarSharp";
import { styled } from "@mui/material/styles";
import { MyHeader } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../models";
import { MyNetworkTag } from "../../components/my-network/mynet-tag/mynet-tag";

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

type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const MyNetwork: React.FC<Props> = ({ classes }) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    console.log("before");
                    const response = await axios.get(
                        `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/LinkedIn/user/get-all-except?token=${token}`
                    );
                    console.log(response.data);
                    setUsers(response.data.items);
                } else {
                    console.log("User ID is not available in localStorage.");
                }
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchUserData();
    }, []);

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
                    <MyHeader />
                    <hr className="opacity-30 my-2"></hr>
                    <div className="ml-6">
                        <span className="text-primary font-semibold text-sm">
                            People you may know
                        </span>
                        <div>
                            {users.map((user, index) => (
                                <MyNetworkTag user={user} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
