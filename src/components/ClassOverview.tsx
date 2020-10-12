import React, { useState } from 'react'
import Button from './Button';

import './ClassOverview.scss';
import { Col, Grid, Item, Row } from './Grid';
import StudentList from './StudentList';
import Toggle from './Toggle';

export interface Props {
    joinChat: () => void
}

const ClassOverview: React.FC<Props> = ({ joinChat }) => {
    const [studying, setStudying] = useState(false);
    return (
        <Grid className="sm-class-overview">
            <Col>
                <Item fill={true}>
                    <div className="blurb">
                        <Row align="center">
                            <Item><p>Are you studying?</p></Item>
                            <Item><Toggle checked={studying} onChange={setStudying} /></Item>
                        </Row>
                    </div>
                </Item>
                <Item>
                    <h2>People Studying</h2>
                    <p>{[].length} students</p>
                </Item>
                <Item grow={true}>
                    <h3>See All</h3>
                    <StudentList students={[]} defaultUrl="/assets/profile.png"></StudentList>
                </Item>
                <Item>
                    <Button onClick={() => joinChat()}>Join Chat</Button>
                </Item>
            </Col>
        </Grid>
    );
}

export default ClassOverview;
