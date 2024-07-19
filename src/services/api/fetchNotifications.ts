// src/services/api.ts
interface Notification {
    id: string;
    message: string;
    date: string;
}

export const fetchNotifications = async (): Promise<Notification[]> => {
    // Gọi API để lấy danh sách thông báo
    const response = await fetch("/api/notifications");
    if (!response.ok) {
        throw new Error("Failed to fetch notifications");
    }
    const data: Notification[] = await response.json();
    return data;
};
