import { useCallback, useState } from "react";
import io from "socket.io-client";
import { ChatMessage } from "src/types";

const socket = io({
    port: '5001'
});

export const sendChatMessage = (message: string) => {
    socket.emit('chat', {
        message,
        timestamp: Date.now()
    });
};

export const joinChatRoom = (courseId: string) => {
    socket.emit('join_room', courseId);
};

socket.on('connect', () => {
    console.log('Connected!');
});

socket.on('disconnect', () => {
    console.log('Disconnected!');
});

const chatListeners = [] as { cb: (Cmsg: ChatMessage) => void }[];
const chatHistory = new Map<string, ChatMessage[]>();

export const useChatHistory = (courseId: string | null) => {
    const [history, setHistory] = useState(() => {
        return (chatHistory.get(courseId ?? '')) ?? []
    });

    // TODO: Figure out a better way to handle this...

    const listen = useCallback((newChat: ChatMessage) => {
        setHistory([...history, newChat]);
    }, [courseId])

    chatListeners.push({ cb: listen });

    return history;
};

socket.on('chat', (message: ChatMessage) => {
    const chatMessage = { ...message, received: Date.now() };

    let chats!: ChatMessage[];

    // TODO: Yeah, this storage is messy.

    if (!(chatHistory.has(chatMessage.courseId)))
        chatHistory.set(chatMessage.courseId, chats = []);
    else
        chats = chatHistory.get(chatMessage.courseId) ?? []

    chats.push(message);
});
