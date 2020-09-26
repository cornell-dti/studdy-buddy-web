import React, { useState } from 'react'
import { useMyCourses } from '../hooks';
import { Course } from '../types';

import AddCourseButton from './AddCourseButton';
import AddCourseModal from './AddCourseModal';
import { Col, Item, Row } from './Grid';

import './SideBar.scss';

interface Props {
    courses: Course[];
    currentCourse: string | null;
    loadCourse(id: string): void;
}

interface EntryProps {
    course: Course;
    currentCourse: string | null;
    loadCourse(id: string): void;
}

const CourseEntry: React.FC<EntryProps> = ({ course, ...props }) => {
    return (
        <li className={`${props.currentCourse === course.courseId ? 'selected' : ''}`}
            onClick={() => props.loadCourse(course.courseId)}>
            <p>{course.subject} <span>{course.courseNumber}</span></p>
            <p>{course.title}</p>
        </li>
    );
}

const SideBar: React.FC<Props> = (props) => {
    const [, setMyCourses] = useMyCourses();
    const [open, setOpen] = useState(false);

    return (
        <Col align="center" className="sm-sidebar">
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
                    onUpdate={(courses) => {
                        setMyCourses([...courses]);
                    }}
                    onClose={() => setOpen(false)}
                    open={open}>
                </AddCourseModal>
            </Item>
            <Item>
                <ul>
                    {props.courses.map(course => <CourseEntry key={course.courseId} course={course} {...props} />)}
                </ul>
            </Item>
        </Col>
    );
}
export default SideBar
