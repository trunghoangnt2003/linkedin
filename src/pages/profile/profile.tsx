import clsx from "clsx";
import React, { useEffect } from "react";
import { Infomation } from "../../components/profile/infomation/infomation";
import { Contact, Description } from "../../components/profile";
import axios from "axios";
import { User } from "../../models/User";

type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const Profile: React.FC<Props> = ({ classes }) => {
    const [user, setUser] = React.useState<User>({} as User);
    const token = localStorage.getItem("token");
    console.log(token);
    useEffect(() => {
        axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?token=` +
                    token
            )
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDescriptionChange = (newDescription: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            description: newDescription,
        }));
    };

    return (
        <div className="flex justify-center items-center  bg-white">
            <div className={clsx(classes?.mainContent, "")}>
                <div className="flex justify-center items-start bg-primary h-2/5 ">
                    <Infomation user={user} />
                </div>
                <div className="flex  items-start bg-primary h-fit mt-2  ">
                    <Contact user={user} />
                </div>
                <div className="flex items-start bg-primary h-1/5 mt-2 ">
                    <Description
                        user={user}
                        onDescriptionChange={handleDescriptionChange}
                    />
                </div>
            </div>
        </div>
    );
};
