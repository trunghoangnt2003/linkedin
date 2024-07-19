// src/context/NotificationContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
    notifications as mockNotifications,
    Notification,
} from "../data/mockData";

interface NotificationContextType {
    notifications: Notification[];
    setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
}

export const NotificationContext = createContext<
    NotificationContextType | undefined
>(undefined);

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
    children,
}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from an API or data source
        setNotifications(mockNotifications);
    }, []);

    return (
        <NotificationContext.Provider
            value={{ notifications, setNotifications }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
