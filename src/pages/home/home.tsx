import clsx from "clsx";

type Props = {
    classes?: {
        [key: string]: string;
    };
};
export const Home: React.FC<Props> = ({ classes }) => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-red-500">
                <div className="flex-1 bg-gray-300 h-full"></div>
                <div className={clsx(classes?.mainContent, "")}>a</div>
                <div className="flex-1 bg-gray-300 h-full"></div>
            </div>
        </>
    );
};
