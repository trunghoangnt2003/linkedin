import React, { useState, ChangeEvent, useEffect } from "react";
import {
    Avatar,
    Button,
    IconButton,
    TextField,
    Divider,
} from "@mui/material";
import { CameraAlt, AlternateEmail, Tag, Close } from "@mui/icons-material";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import clsx from "clsx";
import { User } from "../../models";
import axios from "axios";
import { handlePost } from "./helpers";
import { ModalAllImages, ModalClosePost } from "./Modal";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        console.log(content);
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
        avatar: "",
    });

    const onPost = () => {
        if (content !== "") {
            handlePost({
                content,
                user,
                images,
            });
        } else {
            alert("Vui lòng nhập nội dung để đăng bài");
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("token", token);
                if (token) {
                    const response = await axios.get(
                        `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?token=${token}`
                    );
                    setUser(response.data);
                } else {
                    // Handle the case where the userId is null
                    console.log("User ID is not available in localStorage.");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <div className={clsx(classes?.container)}>
                <div className={clsx(classes?.content)}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <IconButton onClick={handleClose}>
                                <Close className={clsx(classes?.closeHeader)} />
                            </IconButton>
                            <h2 className={clsx(classes?.textHeader)}>Share</h2>
                        </div>
                        <Button
                            className={clsx(classes?.textHeader)}
                            onClick={onPost}
                        >
                            Post
                        </Button>
                    </div>
                    <div className={clsx(classes?.content)}>
                        <Divider className="bg-gray-700" />
                        <div className="flex items-center my-4">
                            <Avatar
                                src={user.avatar}
                                className="bg-gray-700"
                            ></Avatar>
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
                                    <CameraAlt
                                        className={clsx(classes?.text)}
                                    />
                                </IconButton>
                            </label>
                            <IconButton>
                                <AlternateEmail
                                    className={clsx(classes?.text)}
                                />
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
                                                        alt={`upload-${
                                                            index + 1
                                                        }`}
                                                    />

                                                    <button
                                                        className={clsx(
                                                            classes?.closeImg
                                                        )}
                                                        onClick={() =>
                                                            removeImage(
                                                                index + 1
                                                            )
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
                                                
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ModalClosePost showModal={showModal} toggleModal ={toggleModal}/>
            <ModalAllImages isModalOpen = {isModalOpen}  handleModalClose = {handleModalClose} images = {images} removeImage = {removeImage} classes = {classes} />
            
        </>
    );
};
