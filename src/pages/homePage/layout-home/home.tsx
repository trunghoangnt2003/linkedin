import clsx from "clsx";
import { HeaderPost, Post } from "../../../pages";

type Props = {
    classes?: {
        [key: string]: string;
    };
};
export const Home: React.FC<Props> = ({ classes }) => {
    return (
        <>
            <div className="flex justify-center items-center bg-gray-900">
                <div className="flex-1  h-full bg-gray-900"></div>

                <div
                    className={clsx(
                        classes?.mainContent,
                        "bg-black text-white"
                    )}
                >
                    <HeaderPost />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="flex-1  h-full bg-gray-900"></div>
            </div>
        </>
    );
};
