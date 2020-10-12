import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { useToken } from '../hooks';
import { Actions } from '../actions';
import store from '../reducers';
import { ChatMessage } from '../types';

const socket = io(`http://localhost:5000`, {
    autoConnect: false
});

export const sendChatMessage = (courseId: string, text: string) => {
    socket.emit('chat', {
        courseId,
        text,
        name: 'unknown',
        sent: Date.now()
    });
};

export const joinChatRoom = (courseId: string) => {
    socket.emit('join_room', courseId);
};

socket.on('connect', () => {
    console.log('Connected!');

    console.log('Authenticating...');
    socket.emit('authenticate', { JWT: socket.JWT })
});

socket.on('authenticated', () => {
    console.log('Authenticated!');
});

socket.on('disconnect', () => {
    console.log('Disconnected!');
});

declare global {
    namespace SocketIOClient {
        export interface Socket {
            JWT?: string;
        }
    }
}

export const useSocket = () => {
    const [token] = useToken();

    useEffect(() => {
        if (!socket.connected && token) {
            socket.JWT = token;
            socket.connect();
        } else if (token) {
            socket.JWT = token;
        }
    }, [token]);
};

export const useChatHistory = (courseId: string | null) => {
    const history = useSelector(state => {
        return state.chats[courseId || ''];
    });

    return history || [];
};

socket.on('room_joined', (courseId: string) => {
    store.dispatch({
        type: Actions.SELECT_COURSE,
        courseId
    });
});

socket.on('no_room', (courseId: string) => {
    alert(`No room for course with ID: ${courseId}`);
});

socket.on('chat', (message: ChatMessage) => {
    const chatMessage = { ...message, received: Date.now() };

    store.dispatch({
        type: Actions.SEND_CHAT,
        message: chatMessage
    });
});
