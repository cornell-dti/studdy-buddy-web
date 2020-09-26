import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Course } from 'src/types';

import './AddCourseModal.scss';
import Button from './Button';
import { Col, Item, Row } from './Grid';
import SearchBar from './SearchBar';

interface Props {
    open: boolean;
    onClose: () => void,
    onUpdate: (courses: Course[]) => void
}

const AddCourseModal: React.FC<Props> = ({ open, onUpdate, onClose }) => {
    const [courses, setCourses] = useState([] as Course[]);

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
                            <SearchBar onSelect={(course) => {
                                if (!courses.some(c => c.courseId === course.courseId))
                                    setCourses([...courses, course]);
                            }} />
                        </Item>
                        <Item>
                            <h2>Selected Courses</h2>
                        </Item>
                        <Item>
                            <ul>
                                {courses.map(course => <li key={course.courseId}>{course.title}
                                    <button onClick={() => {
                                        const i = courses.findIndex(c => c.courseId === course.courseId)
                                        if (i >= 0) {
                                            const update = courses.slice();
                                            update.splice(i, 1);
                                            return update;
                                        } else {
                                            courses.push(course);

                                            return [...courses];
                                        }
                                    }}>x</button></li>)}

                            </ul>
                        </Item>
                    </Col>
                </Item>
                <Item>
                    <Button onClick={() => onUpdate(courses)}>Update Selected Courses</Button>
                </Item>
            </Col></Item>
        </div>
    );
}
export default AddCourseModal;
