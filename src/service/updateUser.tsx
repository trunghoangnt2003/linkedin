import axios from "axios";
import { User } from "../models/user";

export const UpdateUser = (
    user: User,
    name: string,
    birth: string,
    phone: string
) => {
    axios
        .patch(
            "https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user",
            {
                id: user.id,
                name: name,
                email: user.email,
                birth: birth,
                phone: phone,
                image: user.avatar,
                description: user.description,
            }
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
