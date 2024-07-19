// src/components/NotificationList.tsx
import React, { useState } from "react";
import { useNotifications } from "../../hooks";
import {
    Button,
    Card,
    CardContent,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogActions,
    Menu,
    MenuItem,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { useTheme } from "../../hooks";

export const NotificationList: React.FC = () => {
    const { notifications, setNotifications } = useNotifications();
    const { theme } = useTheme();
    const [selectNotification, setSelectNotification] = useState("all");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedNotification, setSelectedNotification] = useState<
        string | null
    >(null);
    const [open, setOpen] = useState(false);

    const handleMenuClick = (
        event: React.MouseEvent<HTMLElement>,
        id: string
    ) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setSelectedNotification(id);
    };

    const handleDeleteClick = () => {
        setOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedNotification) {
            setNotifications((prevNotifications) =>
                prevNotifications.filter(
                    (notification) => notification.id !== selectedNotification
                )
            );
        }
        setOpen(false);
        setSelectedNotification(null);
    };

    const handleDeleteCancel = () => {
        setOpen(false);
        setSelectedNotification(null);
        setAnchorEl(null);
    };

    return (
        <div
            className="space-y-4"
            style={{ backgroundColor: theme.palette.background.default }}
        >
            <div className="flex space-x-4 bg-[#1E2226] p-5">
                <Button
                    variant="contained"
                    color={selectNotification === "all" ? "success" : "inherit"}
                    style={{ borderRadius: 20 }}
                    onClick={() => setSelectNotification("all")}
                >
                    All
                </Button>
                <Button
                    variant="contained"
                    color={
                        selectNotification === "mypost" ? "success" : "inherit"
                    }
                    style={{ borderRadius: 20 }}
                    onClick={() => setSelectNotification("mypost")}
                >
                    My Post
                </Button>
                <Button
                    variant="contained"
                    color={
                        selectNotification === "mentions"
                            ? "success"
                            : "inherit"
                    }
                    style={{ borderRadius: 20 }}
                    onClick={() => setSelectNotification("mentions")}
                >
                    Mentions
                </Button>
            </div>
            {notifications
                .filter(
                    (notification) =>
                        selectNotification === "all" ||
                        notification.type === selectNotification
                )
                .map((notification) => (
                    <Card
                        key={notification.id}
                        style={{
                            backgroundColor: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            width: "100%",
                        }}
                    >
                        <IconButton
                            aria-label="more"
                            onClick={(event) =>
                                handleMenuClick(event, notification.id)
                            }
                            style={{
                                float: "right",
                                marginTop: "10px",
                                color: "white",
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={
                                Boolean(anchorEl) &&
                                selectedNotification === notification.id
                            }
                            onClose={handleDeleteCancel}
                        >
                            <MenuItem onClick={handleDeleteClick}>Xóa</MenuItem>
                        </Menu>
                        <CardContent style={{ width: "90%" }}>
                            <Typography variant="h6" className="font-bold">
                                {notification.source}
                            </Typography>
                            <Typography variant="body1">
                                {notification.message}
                            </Typography>
                            <Typography variant="body2">
                                {new Date(notification.date).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            <Dialog open={open} onClose={handleDeleteCancel}>
                <DialogTitle>
                    Bạn có chắc chắn muốn xóa thông báo này không?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeleteCancel} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="primary">
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
