import React, { useState } from 'react'
import Button from './Button';
import ClassCall from './ClassCall';

import { useChatHistory } from "../util/chat"

import { Col, Item, Row } from './Grid';

import './ClassChat.scss';

interface Props {
    courseId: string | null
}

const ClassChat: React.FC<Props> = ({ courseId = null }) => {
    const [call, setCall] = useState(false);
    const history = useChatHistory(courseId);

    return (
        <Col className="sm-chat">
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
            {courseId ? <Item className="sm-chat-view">
                {call && <ClassCall />}

                <Col className="no-gutter h-100">
                    <Item fill={true}>
                        <Row align="center">
                            <Item grow={true}>
                                <h3>{courseId}</h3>
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
                        <input />
                    </Item>
                </Col>
            </Item> : <Item><h3>No Chat Open</h3></Item>}
        </Col>

    );
}

export default ClassChat;
