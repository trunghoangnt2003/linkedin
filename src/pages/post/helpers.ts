import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const handleUploadImages = (idPost: string, images: File[], token: string) => {
    if (images.length === 0) return;
    const handleUploadImage = async (image: File, index: number) => {
        try {
            const storageRef = ref(storage, `images/${uuidv4()}${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            const downloadURL = await getDownloadURL(snapshot.ref);
            const response = await axios.post(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/insertImage`,
                {
                    id: idPost,
                    imageId: "i#" + index,
                    url: downloadURL,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Post Image thành công", index, response);
        } catch (err) {
            console.log("Upload failed", index, err);
        }
    };
    const tasks = images.map(handleUploadImage);
    Promise.all(tasks).then(() => {
        console.log("All images uploaded successfully");
    });
};

export const handlePost = async (
    content: string,
    token: string,
    images: File[]
) => {
    try {
        await axios
            .post(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/post`,
                {
                    content: content,
                    'Authorization': `Bearer ${token}`,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            )

            .then(function (response) {
                const idPost = response.data.body.postId;
                if (idPost != null) {
                    handleUploadImages(idPost, images, token);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (err) {
        console.log(err);
    }
};
