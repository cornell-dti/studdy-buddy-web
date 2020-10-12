import React, { useMemo, useState } from 'react'
import Button from './Button';
import ClassCall from './ClassCall';

import { sendChatMessage, useChatHistory } from "../util/chat"
import { useMyCourses } from '../hooks';

import { Col, Item, Row } from './Grid';

import './ClassChat.scss';
import TextInput from './TextInput';


export interface Props {
    courseId: string | null
}

const ClassChat: React.FC<Props> = ({ courseId = null }) => {
    const [call, setCall] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const history = useChatHistory(courseId);

    const courses = useMyCourses();

    const course = useMemo(() => {
        return courses.find(c => c.courseId === courseId) ?? null;
    }, [courseId, courses]);

    return (
        <Col className="no-gutter sm-chat">
            <Item>
                <Row align="center">
                    <Item fill={true}><h4>Chats</h4></Item>
                    <Item>
                        <Button type="call" onClick={() => {
                            setCall(!call);
                        }}>
                            <img className="call-icon" src="/assets/call.svg"></img>
                            <p>Call</p>
                        </Button>
                    </Item>
                </Row>
            </Item>
            {course ? <Item className="sm-chat-view">
                {call && <ClassCall />}

                <Col className="no-gutter h-100">
                    <Item fill={true}>
                        <Row align="center">
                            <Item grow={true}>
                                <h3>{course.title}</h3>
                            </Item>
                            <Item>
                                <Button theme="transparent" onClick={() => console.debug("Close")}>
                                    <img src="/assets/close.svg"></img>
                                </Button>
                            </Item>
                        </Row>
                    </Item>
                    <Item grow={true}>
                        {history.length === 0 ? <div>
                            No Messages
                        </div> : history.map((h, i) => <div key={i}><span>{
                            new Date(h.acknowledged).toLocaleTimeString()
                        }</span>: <span>{h.name}</span>| {h.text}</div>)}
                    </Item>
                    <Item>
                        <TextInput value={chatMessage} onChange={(value) => setChatMessage(value)}></TextInput>
                        <Button onClick={
                            () => {
                                sendChatMessage(course.courseId, chatMessage)
                                setChatMessage('');
                            }
                        }>Send</Button>
                    </Item>
                </Col>
            </Item> : <Item><h3>No Chat Open</h3></Item>}
        </Col>

    );
}

export default ClassChat;
