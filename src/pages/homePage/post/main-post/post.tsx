import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import goku from "../../../../assets/images/gokuu.jpg";
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
import { LikeButton } from "../like-button/like";
import { CommentModal } from "../comment/comment";
import { ImageGalleryModal } from "../view-image/image-modal";

export function Post() {
    const [showReadMore, setShowReadMore] = useState(false);
    const [showReactions, setShowReactions] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);
    const text = "Chưa bao giờ thấy ai đẹp trai, đá Fifa hay như Hà Văn Cường";

    const handleOpenComment = () => setOpenComment(true);
    const handleCloseComment = () => setOpenComment(false);
    const handleOpenGallery = () => setOpenGallery(true);
    const handleCloseGallery = () => setOpenGallery(false);

    const images = [
        "https://hobiverse.com.vn/cdn/shop/articles/goku-dragon-ball_thumbnail_hobi_82cdb25dc32a4b4ca1ba9cd98097f375.jpg?v=1716179415",
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070rNU/anh-avatar-goku-ban-nang-vo-cuc_011149230.jpg",
        "https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-goku-ban-nang-vo-cuc-dep_011152163.jpg",
        "https://i.pinimg.com/564x/85/4a/35/854a351ef9d1bb3f7ae0375a07bd2e8b.jpg",
        "https://i.pinimg.com/736x/5a/dd/04/5add04fe6116577ac31ebf430357e8c7.jpg",
        "https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-goku-ban-nang-vo-cuc-dep_011152163.jpg",
        "https://i.pinimg.com/564x/85/4a/35/854a351ef9d1bb3f7ae0375a07bd2e8b.jpg",
        "https://i.pinimg.com/736x/5a/dd/04/5add04fe6116577ac31ebf430357e8c7.jpg",
        "https://hobiverse.com.vn/cdn/shop/articles/goku-dragon-ball_thumbnail_hobi_82cdb25dc32a4b4ca1ba9cd98097f375.jpg?v=1716179415",
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070rNU/anh-avatar-goku-ban-nang-vo-cuc_011149230.jpg",
        "https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-goku-ban-nang-vo-cuc-dep_011152163.jpg",
        "https://i.pinimg.com/564x/85/4a/35/854a351ef9d1bb3f7ae0375a07bd2e8b.jpg",
        "https://i.pinimg.com/736x/5a/dd/04/5add04fe6116577ac31ebf430357e8c7.jpg",
        "https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-goku-ban-nang-vo-cuc-dep_011152163.jpg",
        "https://i.pinimg.com/564x/85/4a/35/854a351ef9d1bb3f7ae0375a07bd2e8b.jpg",
        "https://i.pinimg.com/736x/5a/dd/04/5add04fe6116577ac31ebf430357e8c7.jpg",
        "https://hobiverse.com.vn/cdn/shop/articles/goku-dragon-ball_thumbnail_hobi_82cdb25dc32a4b4ca1ba9cd98097f375.jpg?v=1716179415",
        "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070rNU/anh-avatar-goku-ban-nang-vo-cuc_011149230.jpg",
        "https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-goku-ban-nang-vo-cuc-dep_011152163.jpg",
        "https://i.pinimg.com/564x/85/4a/35/854a351ef9d1bb3f7ae0375a07bd2e8b.jpg",
        "https://i.pinimg.com/736x/5a/dd/04/5add04fe6116577ac31ebf430357e8c7.jpg",
        "https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-goku-ban-nang-vo-cuc-dep_011152163.jpg",
        "https://i.pinimg.com/564x/85/4a/35/854a351ef9d1bb3f7ae0375a07bd2e8b.jpg",
        "https://i.pinimg.com/736x/5a/dd/04/5add04fe6116577ac31ebf430357e8c7.jpg",
    ];

    return (
        <div className="mb-6 rounded-lg ">
            <Card sx={{ maxWidth: 600, bgcolor: "#1D2226", color: "white" }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={goku} alt="avatar" />
                    }
                    action={
                        <IconButton
                            aria-label="settings"
                            sx={{ color: "white" }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Cường MTP"
                    subheader="6,167,827 followers · 1d"
                    sx={{
                        "& .MuiCardHeader-title": {
                            color: "white",
                        },
                        "& .MuiCardHeader-subheader": {
                            color: "white",
                        },
                    }}
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
                                        sx={{ textColor: "white" }}
                                    >
                                        <Typography
                                            variant="caption"
                                            display="inline"
                                            sx={{ textColor: "white" }}
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
                                        sx={{ color: "white" }}
                                    >
                                        <Typography
                                            variant="caption"
                                            display="inline"
                                            sx={{ textColor: "white" }}
                                        >
                                            ...read less
                                        </Typography>
                                    </Button>
                                </span>
                            )
                        ) : (
                            <span style={{ color: "white" }}>{text}</span>
                        )}
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <Box sx={{ display: "flex", gap: "8px" }}>
                        {images.slice(0, 2).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`image-${index}`}
                                style={{
                                    width: "calc(50% - 4px)",
                                    height: "auto",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleOpenGallery()}
                            />
                        ))}
                    </Box>
                    <Box sx={{ display: "flex", gap: "8px" }}>
                        {images.slice(2, 5).map((image, index) => (
                            <img
                                key={index + 2}
                                src={image}
                                alt={`image-${index + 2}`}
                                style={{
                                    width: "calc(33.33% - 6px)",
                                    height: "auto",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleOpenGallery()}
                            />
                        ))}
                        {images.length > 5 && (
                            <div
                                style={{
                                    position: "relative",
                                    width: "calc(33.33% - 6px)",
                                    height: "100%",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleOpenGallery()}
                            >
                                <img
                                    src={images[4]}
                                    alt="image-more"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 0.5,
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        textAlign: "center",
                                        color: "#fff",
                                        cursor: "pointer",
                                        fontSize: "32px",
                                    }}
                                >
                                    +{images.length - 5}
                                </div>
                            </div>
                        )}
                    </Box>
                </Box>

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
                                <p className="text-xs text-gray-400">
                                    100B likes
                                </p>
                            </div>
                        </div>
                    </Typography>
                    <Typography
                        component={"span"}
                        variant="body2"
                        color="text.secondary"
                    >
                        <div className="mr-2">
                            <p className="text-xs text-gray-400">5M comments</p>
                        </div>
                    </Typography>
                </Box>
                <div className="border-t-2 border-gray-700">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            p: 1,
                        }}
                    >
                        <Tooltip
                            title=""
                            open={showReactions}
                            onClose={() => setShowReactions(false)}
                            sx={{ color: "white" }}
                        >
                            <Button
                                onMouseEnter={() => setShowReactions(true)}
                                onMouseLeave={() => setShowReactions(false)}
                                sx={{ color: "white" }}
                            >
                                <LikeButton />
                            </Button>
                        </Tooltip>

                        <IconButton
                            aria-label="comments"
                            onClick={handleOpenComment}
                            sx={{ color: "white" }}
                        >
                            <CommentIcon />
                        </IconButton>
                        <IconButton aria-label="share" sx={{ color: "white" }}>
                            <ShareIcon color="primary" />
                        </IconButton>
                    </Box>
                </div>
            </Card>
            <CommentModal open={openComment} handleClose={handleCloseComment} />
            <ImageGalleryModal
                open={openGallery}
                handleClose={handleCloseGallery}
                images={images}
            />
        </div>
    );
}
