import React, { useEffect, useState } from "react";
import axios from "axios";

export const Test = () => {
    const [notes, setNotes] = useState([]);
    const id = encodeURIComponent("u#2");
    useEffect(() => {
        axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?id=` +
                    id
            )
            .then((res) => {
                setNotes(res.data);
                console.log(res.data.Pk.S);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Test</h1>
        </div>
    );
};
