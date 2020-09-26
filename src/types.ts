export interface Course {
    title: string;
    courseId: string;
    subject: string;
    courseNumber: string;
}

export interface Student {
    name: string;
    profileUrl?: string;
}

export interface ChatMessage {
    courseId: string;
    name: string;
    text: string;
    sent: number
    acknowledged: number;
    received?: number;
    profileUrl?: string;
}