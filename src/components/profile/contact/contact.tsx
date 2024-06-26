import CakeIcon from "@mui/icons-material/Cake";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const Contact: React.FC<Props> = ({ classes }) => {
    return (
        <div className="text-primary">
            <div className="m-4">
                <h1 className="mb-3 font-medium">Contact</h1>
                <span className="text-center flex mb-1 text-sm">
                    <CakeIcon fontSize="small" /> &nbsp; 10th May 2000
                </span>
                <span className="text-center flex mb-1 text-sm">
                    <AlternateEmailIcon fontSize="small" /> &nbsp;
                    0GJt6@example.com
                </span>
                <span className="text-center flex mb-1 text-sm">
                    <PhoneIcon fontSize="small" /> &nbsp; 123456789
                </span>
            </div>
        </div>
    );
};
