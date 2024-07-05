import axios from "axios";
import { User } from "../models/user";

export const UpdateBirth = (user: User, birth: string) => {
    axios
        .patch(
            "https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user",
            {
                id: user.id,
                name: user.name,
                email: user.email,
                birth: birth,
                phone: user.phone,
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
