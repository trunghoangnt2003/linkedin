import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import goku from "../../../assets/images/gokuu.jpg";
import Tooltip from "@mui/material/Tooltip";

import {
    FaHeart,
    FaSmile,
    FaMale,
    FaLaugh,
    FaFrown,
    FaAngry,
} from "react-icons/fa";
import { GiSurprised } from "react-icons/gi";
import { useState } from "react";
import { LikeButton } from "./like-button/like";

export function Post() {
    const [showReadMore, setShowReadMore] = useState(false);
    const [showReactions, setShowReactions] = useState(false);
    const text = "Chưa bao giờ thấy ai đẹp trai, đá Fifa hay như Hà Văn Cường";

    return (
        <div className="border-2 border-red-500 my-12">
            <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={goku} alt="avatar" />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Cường MTP"
                    subheader="6,167,827 followers · 1d"
                />
                <CardContent>
                    <Typography
                        component={"span"}
                        variant="body2"
                        color="text.secondary"
                    >
                        {text.length > 100 ? (
                            !showReadMore ? (
                                <span>
                                    {text.substring(0, 100)}
                                    <Button
                                        size="small"
                                        color="primary"
                                        component="span"
                                        onClick={() => setShowReadMore(true)}
                                    >
                                        <Typography
                                            variant="caption"
                                            display="inline"
                                        >
                                            ...read more
                                        </Typography>
                                    </Button>
                                </span>
                            ) : (
                                <span>
                                    {text}
                                    <Button
                                        size="small"
                                        color="primary"
                                        component="span"
                                        onClick={() => setShowReadMore(false)}
                                    >
                                        <Typography
                                            variant="caption"
                                            display="inline"
                                        >
                                            ...read less
                                        </Typography>
                                    </Button>
                                </span>
                            )
                        ) : (
                            text
                        )}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://hobiverse.com.vn/cdn/shop/articles/goku-dragon-ball_thumbnail_hobi_82cdb25dc32a4b4ca1ba9cd98097f375.jpg?v=1716179415"
                    alt="goku"
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        my: 1,
                    }}
                >
                    <Typography
                        component={"span"}
                        variant="body2"
                        color="text.secondary"
                    >
                        <div className="flex items-center">
                            <FaHeart size={16} color="#FF69B4" /> {/* thích */}
                            <FaSmile size={16} color="#F7DC6F" />{" "}
                            {/* yêu thích */}
                            <FaMale size={16} color="#45B3FA" />{" "}
                            {/* thương thương */}
                            <FaLaugh size={16} color="#8BC34A" /> {/* haha */}
                            <GiSurprised size={16} color="#9C27B0" />{" "}
                            {/* wow */}
                            <FaFrown size={16} color="#9E9E9E" /> {/* buồn */}
                            <FaAngry size={16} color="#FFC107" />{" "}
                            {/* phẫn nộ */}
                            <div className="ml-2">
                                <p className="text-xs">100B likes</p>
                            </div>
                        </div>
                    </Typography>
                    <Typography
                        component={"span"}
                        variant="body2"
                        color="text.secondary"
                    >
                        <div className="mr-2">
                            <p className="text-xs">5M comments</p>
                        </div>
                    </Typography>
                </Box>
                <div className="border-t-2 border-gray-300">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            p: 1,
                        }}
                    >
                        <Tooltip
                            title="Reactions"
                            open={showReactions}
                            onClose={() => setShowReactions(false)}
                        >
                            <Button
                                onMouseEnter={() => setShowReactions(true)}
                                onMouseLeave={() => setShowReactions(false)}
                            >
                                <LikeButton />
                            </Button>
                        </Tooltip>

                        <IconButton aria-label="comment">
                            <CommentIcon color="primary" />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon color="primary" />
                        </IconButton>
                    </Box>
                </div>
            </Card>
        </div>
    );
}
