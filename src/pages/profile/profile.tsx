import clsx from "clsx";
import React from "react";
import { Infomation } from "../../components/profile/infomation/infomation";
import { Contact, Description } from "../../components/profile";

type Props = {
    classes?: {
        [key: string]: string;
    };
};
export const Profile: React.FC<Props> = ({ classes }) => {
    return (
        <div className="flex justify-center items-center  bg-white">
            <div className={clsx(classes?.mainContent, "")}>
                <div className="flex justify-center items-start bg-primary h-2/5">
                    <Infomation />
                </div>
                <div className="flex  items-start bg-primary h-fit mt-2">
                    <Contact />
                </div>
                <div className="flex items-start bg-primary h-fit mt-2">
                    <Description />
                </div>
            </div>
        </div>
    );
};
