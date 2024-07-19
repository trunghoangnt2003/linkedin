import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../models/user";

export const useGetUser = (id) => {
    const [user, setUser] = useState({} as User);
    useEffect(() => {
        axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/LinkedIn/user/profile?id=` +
                    id
            )
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return user;
};
