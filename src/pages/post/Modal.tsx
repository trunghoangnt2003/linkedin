import { Button, Modal, Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Close } from "@mui/icons-material";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

type PropsModalClosePost = {

    showModal : boolean,
    toggleModal : ()=>void
};

export const ModalClosePost : React.FC<PropsModalClosePost> = ({showModal, toggleModal}) => {
    const navigate = useNavigate();
    return (
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
                    <Typography id="modal-title" variant="h6" component="h2">
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
                            onClick={() => {
                                navigate("/");
                            }}
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
    );
};

type PropsModalAllImages = {
    classes?: {
        [key: string]: string;
    },
    isModalOpen: boolean,
    handleModalClose: () => void,
    images: File[],
    removeImage: (index: number) => void,
};
export const ModalAllImages :React.FC<PropsModalAllImages> = ({isModalOpen, handleModalClose, images, removeImage, classes}) => {
    return (
        <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            className="overflow-y-auto h-full"
        >
            <Box
                sx={{
                    borderRadius: "8px 8px 0 0",
                    width: "100%",
                    maxWidth: "414px",
                    position: "relative",
                    overflowY: "auto",
                }}
                className={clsx(classes?.modalBox, "bg-slate-800")}
            >
                <div className="flex justify-end items-end p-4 sticky top-0 z-50">
                    <Button className=" text-white" onClick={handleModalClose}>
                        Done
                    </Button>
                </div>
                <div className="flex flex-col space-y-2 overflow-auto">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={URL.createObjectURL(image)}
                                className={clsx(classes?.img)}
                                alt={`upload-${index}`}
                            />
                            <button
                                className={clsx(classes?.closeImg)}
                                onClick={() => removeImage(index)}
                            >
                                <Close fontSize="small" />
                            </button>
                        </div>
                    ))}
                </div>
            </Box>
        </Modal>
    );
};
