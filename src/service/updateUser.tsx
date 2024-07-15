import axios from "axios";
import { User } from "../models/user";

export const UpdateUser = (user: User) => {
    const token = localStorage.getItem("token");
    axios
        .patch(
            "https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user",
            {
                id: user.id,
                name: user.name,
                email: user.email,
                birth: user.birth,
                phone: user.phone,
                image: user.avatar,
                description: user.description,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
