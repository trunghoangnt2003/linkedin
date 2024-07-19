// src/hooks/useNotifications.ts
import { useContext } from "react";
import { NotificationContext } from "../contexts";

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error(
            "useNotifications must be used within a NotificationProvider"
        );
    }
    return context;
};
