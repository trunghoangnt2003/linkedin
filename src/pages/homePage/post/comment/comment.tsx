import { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Avatar,
    IconButton,
    Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const commentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: "#333",
    boxShadow: 24,
    p: "2rem",
    borderRadius: "1rem",
    color: "#fff",
};

const commentsData = [
    {
        id: 1,
        avatar: "https://avatarfiles.alphacoders.com/375/thumb-350-375590.webp",
        name: "Tuan Sardius",
        time: "1 tuần",
        text: "Đá đang hay... đang vui đi cho thằng Sa Tế vào phá game😂😂😂",
        likes: 1,
    },
    {
        id: 2,
        avatar: "https://avatarfiles.alphacoders.com/375/thumb-350-375590.webp",
        name: "Nguyen Thanh Truc",
        time: "1 tuần",
        text: "😂Hông lẽ chủ nhà ôm cúp",
        likes: 1,
    },
    {
        id: 3,
        avatar: "https://avatarfiles.alphacoders.com/375/thumb-350-375590.webp",
        name: "Ka Thong",
        time: "1 tuần",
        text: "Bạn cất cúp vào nhà đi đức a ko ai lấy đc đâu 😪",
        likes: 1,
    },
];

export function CommentModal({ open, handleClose }) {
    const [commentText, setCommentText] = useState(""); // State để lưu trữ nội dung của ô nhập comment
    const [comments, setComments] = useState(commentsData);

    const handleAddComment = () => {
        if (commentText.trim() !== "") {
            const newComment = {
                id: comments.length + 1,
                avatar: "https://avatarfiles.alphacoders.com/375/thumb-350-375590.webp",
                name: "New User",
                time: "Vừa xong",
                text: commentText, // Sử dụng commentText thay vì comment
                likes: 0,
            };
            setComments([...comments, newComment]);
            setCommentText(""); // Đặt lại commentText về rỗng sau khi comment thành công
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={commentStyle}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Comments
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: "#fff" }} />
                    </IconButton>
                </Box>
                <Divider sx={{ my: "1rem", bgcolor: "#555" }} />
                <List>
                    {comments.map((comment) => (
                        <ListItem
                            key={comment.id}
                            alignItems="flex-start"
                            sx={{ my: "1rem" }}
                        >
                            <Avatar src={comment.avatar} />
                            <ListItemText
                                primary={
                                    <Box sx={{ marginLeft: "1rem" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                    sx={{
                                                        color: "#fff",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    {comment.name}
                                                </Typography>
                                                <Typography
                                                    component="span"
                                                    variant="caption"
                                                    color="textSecondary"
                                                    sx={{ color: "#bbb" }} // Light gray color for timestamp
                                                >
                                                    · {comment.time}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: "#fff" }}
                                            >
                                                {comment.text}
                                            </Typography>
                                        </Box>
                                    </Box>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: "flex", mt: "1rem" }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Add a comment..."
                        value={commentText} // Sử dụng commentText thay vì comment
                        onChange={(e) => setCommentText(e.target.value)} // Cập nhật commentText khi thay đổi
                        sx={{
                            input: { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#555", // Dark gray border
                                },
                                "&:hover fieldset": {
                                    borderColor: "#777", // Light gray border on hover
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#bbb", // Light gray border when focused
                                },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddComment}
                        sx={{ ml: "1rem", bgcolor: "#1976d2" }} // Ensure button is visible
                    >
                        Post
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
