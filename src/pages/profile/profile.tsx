import clsx from "clsx";
import React, { useEffect } from "react";
import { Infomation } from "../../components/profile/infomation/infomation";
import { Contact, Description } from "../../components/profile";
import axios from "axios";
import { User } from "../../models/user";

type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const Profile: React.FC<Props> = ({ classes }) => {
    const [user, setUser] = React.useState<User>({} as User);
    const id = encodeURIComponent("u#6wVmgUn2fGVQM1m4JQQx1zuAxou2");

    useEffect(() => {
        axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?id=` +
                    id
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
                <div className="flex justify-center items-start bg-primary h-2/5">
                    <Infomation user={user} />
                </div>
                <div className="flex  items-start bg-primary h-fit mt-2">
                    <Contact user={user} />
                </div>
                <div className="flex items-start bg-primary h-1/5 mt-2">
                    <Description
                        user={user}
                        onDescriptionChange={handleDescriptionChange}
                    />
                </div>
            </div>
        </div>
    );
};
