import clsx from "clsx";
import { Post } from "../../../pages";

type Props = {
    classes?: {
        [key: string]: string;
    };
};
export const Home: React.FC<Props> = ({ classes }) => {
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="flex-1  h-full"></div>
                <div className={clsx(classes?.mainContent, "")}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="flex-1  h-full"></div>
            </div>
        </>
    );
};
