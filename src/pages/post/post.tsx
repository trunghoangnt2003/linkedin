import React, { useState, ChangeEvent, useEffect } from "react";
import {
    Avatar,
    Button,
    IconButton,
    TextField,
    Divider,
    Modal,
    Box,
    Typography,
} from "@mui/material";
import { CameraAlt, AlternateEmail, Tag, Close } from "@mui/icons-material";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import clsx from "clsx";
import { Footer } from "../../components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { User } from "../../models";
import axios from "axios";
type Props = {
    classes?: {
        [key: string]: string;
    };
};
export const PostShare: React.FC<Props> = ({ classes }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const [content, setContent] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);
    const [active, setActive] = useState("post");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleClose = () => {
        toggleModal();
    };

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };  
    const [user, setUser] = React.useState<User>({
        id: "",
        email: "",
        birth: new Date(),
        phone: 0,
        name: "",
        description: "",
        avatar: ""
    });
    const id = localStorage.getItem("user");
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
    return (
        <div className={clsx(classes?.container)}>
            <div className={clsx(classes?.content)}>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <IconButton onClick={handleClose}>
                            <Close className={clsx(classes?.closeHeader)} />
                        </IconButton>
                        <h2 className={clsx(classes?.textHeader)}>Share</h2>
                    </div>
                    <Button className={clsx(classes?.textHeader)}>Post</Button>
                </div>
                <div className={clsx(classes?.content)}>
                    <Divider className="bg-gray-700" />
                    <div className="flex items-center my-4">
                        <Avatar className="bg-gray-700">
                            <img src={user.avatar}/>
                        </Avatar>
                        <div className="ml-3">
                            <p className="text-sm font-medium">
                                {user.name}
                            </p>
                            <div className="flex items-center text-gray-400 text-xs">
                                <span className="mr-1">Public</span>
                                <span>
                                    <PublicRoundedIcon
                                        className={clsx(classes?.text)}
                                        fontSize="inherit"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <TextField
                            variant="standard"
                            placeholder="What's on your mind?"
                            fullWidth
                            multiline
                            value={content}
                            onChange={handleContentChange}
                            InputProps={{
                                disableUnderline: true,
                                style: { color: "white" },
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    backgroundColor: "transparent",
                                },
                            }}
                        />
                    </div>
                    <Divider className="bg-gray-700" />
                    <div className="flex my-4">
                        <input
                            accept="image/*"
                            style={{ display: "none" }}
                            id="icon-button-file"
                            type="file"
                            multiple
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton component="span">
                                <CameraAlt className={clsx(classes?.text)} />
                            </IconButton>
                        </label>
                        <IconButton>
                            <AlternateEmail className={clsx(classes?.text)} />
                        </IconButton>
                        <IconButton>
                            <Tag className={clsx(classes?.text)} />
                        </IconButton>
                    </div>
                    {images.length > 0 && (
                        <div className="mt-4 space-y-2">
                            <div className="relative mx-2">
                                <img
                                    src={URL.createObjectURL(images[0])}
                                    className={clsx(classes?.img)}
                                    alt={`upload-0`}
                                />
                                <button
                                    className={clsx(classes?.closeImg)}
                                    onClick={() => removeImage(0)} // Ảnh lớn, index 0
                                >
                                    <Close fontSize="small" />
                                </button>
                            </div>
                            {images.length > 1 && (
                                <div className="flex mt-2">
                                    {images
                                        .slice(
                                            1,
                                            images.length > 3
                                                ? 3
                                                : images.length
                                        )
                                        .map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative mx-2 w-1/3"
                                            >
                                                <img
                                                    src={URL.createObjectURL(
                                                        image
                                                    )}
                                                    className={clsx(
                                                        classes?.small_image
                                                    )}
                                                    alt={`upload-${index + 1}`}
                                                />

                                                <button
                                                    className={clsx(
                                                        classes?.closeImg
                                                    )}
                                                    onClick={() =>
                                                        removeImage(index + 1)
                                                    }
                                                >
                                                    <Close fontSize="small" />
                                                </button>
                                            </div>
                                        ))}
                                    {images.length > 3 && (
                                        <div className="relative mx-2 w-1/3 cursor-pointer">
                                            <img
                                                src={URL.createObjectURL(
                                                    images[3]
                                                )}
                                                alt={`upload-2`}
                                                className={clsx(
                                                    classes?.small_image,
                                                    "opacity-45"
                                                )}
                                            />
                                            <div
                                                className={clsx(
                                                    classes?.moreImg
                                                )}
                                                onClick={handleModalOpen}
                                            >
                                                +{images.length - 3}
                                            </div>
                                            <Modal
                                                open={isModalOpen}
                                                onClose={handleModalClose}
                                                className="overflow-y-auto h-full"
                                            >
                                                <Box
                                                    sx={{
                                                        borderRadius:
                                                            "8px 8px 0 0",
                                                        width: "100%",
                                                        maxWidth: "414px",
                                                        position: "relative",
                                                        overflowY: "auto",
                                                    }}
                                                    className={clsx(
                                                        classes?.modalBox,
                                                        "bg-slate-800"
                                                    )}
                                                >
                                                    <div className="flex justify-end items-end p-4 sticky top-0 z-50">
                                                        <Button
                                                            className=" text-white"
                                                            onClick={
                                                                handleModalClose
                                                            }
                                                        >
                                                            Done
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col space-y-2 overflow-auto">
                                                        {images.map(
                                                            (image, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="relative"
                                                                >
                                                                    <img
                                                                        src={URL.createObjectURL(
                                                                            image
                                                                        )}
                                                                        className={clsx(
                                                                            classes?.img
                                                                        )}
                                                                        alt={`upload-${index}`}
                                                                    />
                                                                    <button
                                                                        className={clsx(
                                                                            classes?.closeImg
                                                                        )}
                                                                        onClick={() =>
                                                                            removeImage(
                                                                                index
                                                                            )
                                                                        }
                                                                    >
                                                                        <Close fontSize="small" />
                                                                    </button>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </Box>
                                            </Modal>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className={clsx(classes?.footer)}>
                <Footer active={active} setActive={setActive} />
            </div>
            <Modal
                open={showModal}
                onClose={toggleModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "black",
                        color: "white",
                        p: 4,
                        borderRadius: "8px 8px 0 0",
                        width: "100%",
                        maxWidth: "414px",
                        position: "relative",
                        overflowY: "auto",
                        maxHeight: "80vh",
                        marginRight: "auto",
                        marginLeft: "auto",
                    }}
                >
                    <Box sx={{ mt: 0 }}>
                        {/* Nội dung modal */}
                        <Typography
                            id="modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Discard the post?
                        </Typography>
                        <Typography id="modal-description" sx={{ mt: 2 }}>
                            If you discard it now, you will lose this post.
                        </Typography>
                        <Box
                            sx={{
                                mt: 4,
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    p: 2,
                                    border: "1px solid gray",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    "&:hover": {
                                        bgcolor: "gray",
                                    },
                                }}
                                onClick={toggleModal}
                            >
                                <span role="img" aria-label="edit">
                                    <EditIcon />
                                </span>
                                <Typography>Continue editing</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    p: 2,
                                    border: "1px solid gray",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    "&:hover": {
                                        bgcolor: "gray",
                                    },
                                }}
                                onClick={toggleModal}
                            >
                                <span role="img" aria-label="delete">
                                    <DeleteIcon />
                                </span>
                                <Typography>Discard post</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
