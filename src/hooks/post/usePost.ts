import { usePostContext } from "../../contexts";
import {
    createPost as createPostService,
    updatePost as updatePostService,
    deletePost as deletePostService,
} from "../../services";

export const usePosts = () => {
    const { posts, setPosts } = usePostContext();

    const addPost = async (
        userId: string,
        content: string,
        images: string[]
    ) => {
        const newPost = await createPostService({ userId, content, images });
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    const editPost = async (
        id: string,
        content?: string,
        images?: string[]
    ) => {
        const updatedPost = await updatePostService(id, { content, images });
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === id ? updatedPost : post))
        );
    };

    const removePost = async (id: string) => {
        await deletePostService(id);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    };

    return {
        posts,
        addPost,
        editPost,
        removePost,
    };
};
