// src/data/mockData.ts
export interface Notification {
    id: string;
    message: string;
    date: string;
    source: string;
    type: "all" | "mypost" | "mentions"; // Thêm type vào interface
}

export const notifications: Notification[] = [
    {
        id: "1",
        message:
            "Starting a new job? Follow this step-by-step guide to shine from day one.",
        date: new Date().toISOString(),
        source: "Get Ahead",
        type: "mypost",
    },
    {
        id: "2",
        message:
            "Do you look at the screen or the camera during a virtual interview? Here's why it matters.",
        date: new Date().toISOString(),
        source: "LinkedIn News Asia",
        type: "mentions",
    },
    {
        id: "3",
        message: "intern: 9 opportunities in Hanoi Capital Region",
        date: new Date().toISOString(),
        source: "Kaopiz",
        type: "all",
    },
    {
        id: "4",
        message: "Networking tips for your next virtual event.",
        date: new Date().toISOString(),
        source: "Career Coach",
        type: "mypost",
    },
    {
        id: "5",
        message: "How to prepare for a technical interview.",
        date: new Date().toISOString(),
        source: "LinkedIn Learning",
        type: "mentions",
    },
    {
        id: "6",
        message: "Top 10 skills in demand for 2024.",
        date: new Date().toISOString(),
        source: "Job Market Insights",
        type: "all",
    },
    {
        id: "7",
        message: "Your resume has been viewed by 5 recruiters.",
        date: new Date().toISOString(),
        source: "LinkedIn",
        type: "mypost",
    },
    {
        id: "8",
        message: "You have been mentioned in a post.",
        date: new Date().toISOString(),
        source: "Colleague",
        type: "mentions",
    },
    {
        id: "9",
        message: "Webinar: Mastering remote work in 2024.",
        date: new Date().toISOString(),
        source: "Professional Development",
        type: "all",
    },
    {
        id: "10",
        message: "New message from a recruiter.",
        date: new Date().toISOString(),
        source: "Recruitment",
        type: "mypost",
    },
    {
        id: "11",
        message:
            "Starting a new job? Follow this step-by-step guide to shine from day one.",
        date: new Date().toISOString(),
        source: "Get Ahead",
        type: "mypost",
    },
    {
        id: "12",
        message:
            "Do you look at the screen or the camera during a virtual interview? Here's why it matters.",
        date: new Date().toISOString(),
        source: "LinkedIn News Asia",
        type: "mentions",
    },
    {
        id: "13",
        message: "intern: 9 opportunities in Hanoi Capital Region",
        date: new Date().toISOString(),
        source: "Kaopiz",
        type: "all",
    },
    {
        id: "14",
        message: "Networking tips for your next virtual event.",
        date: new Date().toISOString(),
        source: "Career Coach",
        type: "mypost",
    },
    {
        id: "15",
        message: "How to prepare for a technical interview.",
        date: new Date().toISOString(),
        source: "LinkedIn Learning",
        type: "mentions",
    },
    {
        id: "16",
        message: "Top 10 skills in demand for 2024.",
        date: new Date().toISOString(),
        source: "Job Market Insights",
        type: "all",
    },
    {
        id: "17",
        message: "Your resume has been viewed by 5 recruiters.",
        date: new Date().toISOString(),
        source: "LinkedIn",
        type: "mypost",
    },
    {
        id: "18",
        message: "You have been mentioned in a post.",
        date: new Date().toISOString(),
        source: "Colleague",
        type: "mentions",
    },
    {
        id: "19",
        message: "Webinar: Mastering remote work in 2024.",
        date: new Date().toISOString(),
        source: "Professional Development",
        type: "all",
    },
    {
        id: "20",
        message: "New message from a recruiter.",
        date: new Date().toISOString(),
        source: "Recruitment",
        type: "mypost",
    },
    {
        id: "21",
        message: "Your application has been viewed by a recruiter.",
        date: new Date().toISOString(),
        source: "LinkedIn",
        type: "mypost",
    },
    {
        id: "22",
        message: "5 new connections have joined your network.",
        date: new Date().toISOString(),
        source: "LinkedIn",
        type: "all",
    },
    {
        id: "23",
        message: "You were endorsed for a skill.",
        date: new Date().toISOString(),
        source: "Colleague",
        type: "mentions",
    },
    {
        id: "24",
        message: "A new job posting matches your profile.",
        date: new Date().toISOString(),
        source: "Job Alerts",
        type: "all",
    },
    {
        id: "25",
        message: "How to excel in remote work.",
        date: new Date().toISOString(),
        source: "Remote Work Guide",
        type: "mypost",
    },
];
