import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { joinChatRoom } from '../util/chat';
import { useMyCourses } from '../hooks';
import { Course } from '../types';

import AddCourseButton from './AddCourseButton';
import AddCourseModal from './AddCourseModal';
import { Col, Item, Row } from './Grid';

import './SideBar.scss';

export interface Props {

}

interface EntryProps {
    course: Course;
}

const CourseEntry: React.FC<EntryProps> = ({ course }) => {
    const currentCourse = useSelector(state => state.selectedCourse);

    return (
        <li className={`sm-course-entry ${currentCourse === course.courseId ? 'selected' : ''}`}>
            <button onClick={() => joinChatRoom(course.courseId)}>
                <p>{course.subject} <span>{course.courseNumber}</span></p>
                <p>{course.title}</p>
            </button>
        </li>
    );
}

const SideBar: React.FC<Props> = () => {
    const [open, setOpen] = useState(false);

    const courses = useMyCourses();

    return (
        <Col align="center" className="sm-sidebar no-gutter">
            <img alt="Study Buddy" className="wordmark" src="/assets/wordmark.svg" />

            <Item fill={true}>
                <Row align="center" className="course-header no-gutter">
                    <Item grow={true}>
                        <h2>Courses</h2>
                    </Item>
                    <Item>
                        <AddCourseButton onClick={() => setOpen(true)}></AddCourseButton>
                    </Item>
                </Row>


                <AddCourseModal
                    onClose={() => setOpen(false)}
                    open={open}>
                </AddCourseModal>
            </Item>
            <Item fill={true}>
                <ul className="sm-course-list">
                    {courses.map(course => <CourseEntry key={course.courseId} course={course} />)}
                </ul>
            </Item>
        </Col>
    );
}
export default SideBar
