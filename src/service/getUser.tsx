import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUser = (id) => {
    const [user, setUser] = useState(Object);
    useEffect(() => {
        axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?id=` +
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
