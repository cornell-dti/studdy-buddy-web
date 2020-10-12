import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Actions } from '../actions';
import { Course } from '../types';

import './AddCourseModal.scss';
import Button from './Button';
import { Col, Item, Row } from './Grid';
import RemoveCourseButton from './RemoveCourseButton';
import SearchBar from './SearchBar';

export interface Props {
    open: boolean;
    onClose: () => void;
}

const AddCourseModal: React.FC<Props> = ({ open, onClose }) => {
    const [courses, setCourses] = useState([] as Course[]);

    const dispatch = useDispatch();

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useLayoutEffect(() => {
        const body = document.querySelector('body');

        if (open) {
            document.addEventListener('keydown', onKeyDown);

            body?.classList.add('modal');
        }

        return () => {
            body?.classList.remove('modal');

            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onKeyDown]);

    const removeCourse = useCallback((course: Course) => {
        const i = courses.findIndex(c => c.courseId === course.courseId)

        if (i >= 0) {
            setCourses([...courses.slice(0, i), ...courses.slice(i + 1)])
        }
    }, [courses]);

    const addCourse = useCallback((course: Course) => {
        if (!courses.some(c => c.courseId === course.courseId)) {
            setCourses([...courses, course]);
        }
    }, [courses]);

    return (
        <div className={`sm-add-course-modal col center vertical-center ${open ? `open` : `closed`}`}
            role="dialog"
            aria-labelledby="ModalTitle"
            aria-describedby="ModalDescription"
            aria-hidden={!open}
        >
            <Item><Col className="content no-gutter" align="center">
                <Item fill={true}><Row className="content-header">
                    <Item grow={true}>
                        <h1 id="ModalTitle">Search for Courses</h1>
                    </Item>
                    <Item>
                        <Button type="close" theme="transparent" onClick={onClose}>X</Button>
                    </Item>
                    <p id="ModalDescription" aria-hidden={false} style={{ display: 'hide' }}></p>
                </Row></Item>
                {/* We display: none; this for visual content, but show it in the ARIA stack. */}
                <Item fill={true} grow={true}>
                    <Col className="h-100">
                        <Item>
                            <SearchBar onSelect={(course) => addCourse(course)} />
                        </Item>
                        <Item>
                            <h2>Selected Courses</h2>
                        </Item>
                        <Item>
                            <ul>
                                {courses.map(course => (
                                    <li key={course.courseId}>{course.title}
                                        <RemoveCourseButton onClick={() => removeCourse(course)}>x</RemoveCourseButton>
                                    </li>
                                ))}

                            </ul>
                        </Item>
                    </Col>
                </Item>
                <Item>
                    <Button onClick={() => {
                        dispatch({
                            type: Actions.ADD_COURSES,
                            courses
                        });

                        onClose();
                    }}>Update Selected Courses</Button>
                </Item>
            </Col></Item>
        </div>
    );
}
export default AddCourseModal;
