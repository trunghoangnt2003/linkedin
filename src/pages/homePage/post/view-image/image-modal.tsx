import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    bgcolor: "background.paper",
    boxShadow: 24,
};

const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "calc(90vh - 20px)", // Điều chỉnh độ cao của modal, 20px là khoảng cách top và bottom
    overflowY: "auto",
};

const closeButtonStyle = {
    position: "fixed",
    top: "0", // Khoảng cách top
    right: "0", // Khoảng cách right
    zIndex: 999, // Đảm bảo nút đóng hiển thị trên top các thành phần khác
};

export function ImageGalleryModal({ open, handleClose, images }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <Box sx={contentStyle}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={closeButtonStyle}
                    >
                        <CloseIcon />
                    </IconButton>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`image-${index}`}
                            style={{ width: "80%", marginBottom: "16px" }}
                        />
                    ))}
                </Box>
            </Box>
        </Modal>
    );
}
