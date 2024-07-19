import clsx from "clsx";
import React, { useEffect } from "react";
import { Infomation } from "../../components/profile/infomation/infomation";
import { Contact, Description } from "../../components/profile";
import axios from "axios";
import { User } from "../../models/user";
import { useLocation } from "react-router-dom";
import { useGetUser } from "../../service";

type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const Profile: React.FC<Props> = ({ classes }) => {
    const location = useLocation();
    const [user, setUser] = React.useState<User>({} as User);

    // const userProfile = useGetUser(
    //     encodeURIComponent("u#8f003132-75d8-4d89-941f-e31381bfcbc1")
    // );

    const userProfile = location.state.user || {};

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const response = await axios.get(
                        `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/LinkedIn/user?token=${token}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    setUser(response.data);
                } else {
                    // Handle the case where the userId is null
                    console.log("User ID is not available in localStorage.");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData();
    }, []);

    // console.log(userProfile.id + " __" + user.id);
    // console.log(userProfile.id === user.id);

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
                    <Infomation user={user} userProfile={userProfile} />
                </div>
                <div className="flex  items-start bg-primary h-fit mt-2  ">
                    <Contact user={user} userProfile={userProfile} />
                </div>
                <div className="flex items-start bg-primary h-1/5 mt-2 ">
                    <Description
                        user={user}
                        userProfile={userProfile}
                        onDescriptionChange={handleDescriptionChange}
                    />
                </div>
            </div>
        </div>
    );
};
