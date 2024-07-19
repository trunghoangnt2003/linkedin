import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../../services";
import { Post } from "../../../models/Post";

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const fetchedPost = await fetchPostById(id!);
                // Chuyển đổi dữ liệu nếu cần
                const formattedPost: Post = {
                    id: fetchedPost.id,
                    userId: fetchedPost.userId,
                    content: fetchedPost.content,
                    imageUrls: fetchedPost.images, // Chuyển đổi từ images thành imageUrls
                    create_date: new Date(fetchedPost.create_date), // Chuyển đổi từ string thành Date
                };
                setPost(formattedPost);
            } catch (err) {
                setError("Failed to load post");
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found</div>;

    return (
        <div className="post-detail">
            <h1>Post Detail</h1>
            <h2>{post.content}</h2>
            <p>Created by User: {post.userId}</p>
            <p>Date: {post.create_date.toLocaleDateString()}</p>
            <div>
                <h3>Images:</h3>
                {post.imageUrls.length > 0 ? (
                    post.imageUrls.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Post Image ${index}`}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
        </div>
    );
};

export default PostDetail;
