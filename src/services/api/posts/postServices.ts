import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "https://api.example.com/posts";

const dataMockPost = {
    id: "1",
    userId: "1",
    content: "Hello world",
    images: [
        "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/12/songoku-9.jpg",
        "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/12/songoku-9.jpg",
    ],
    create_date: "2022-01-01T00:00:00.000Z",
};

export const fetchPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchPostById = async (id: string) => {
    // const response = await axios.get(`${API_URL}/${id}`);
    // return response.data;

    return dataMockPost;
};

export const createPost = async (postData: {
    userId: string;
    content: string;
    images: string[];
}) => {
    const postWithId = {
        ...postData,
        id: uuidv4(),
        create_date: new Date().toISOString(),
    };
    const response = await axios.post(API_URL, postWithId);
    return response.data;
};

export const updatePost = async (
    id: string,
    postData: {
        content?: string;
        images?: string[];
    }
) => {
    const response = await axios.put(`${API_URL}/${id}`, postData);
    return response.data;
};

export const deletePost = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
};
