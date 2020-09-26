import React from 'react';

import { Student } from '../types';

import './StudentList.scss';

interface BubbleProps {
    student: Student;
    defaultUrl: string;
}

interface Props {
    defaultUrl: string;
    students: Student[];
}

const StudentBubble: React.FC<BubbleProps> = ({ student, defaultUrl }) => {
    return (
        <div>
            <img src={student.profileUrl ?? defaultUrl}></img>
            {student.name}
        </div>
    )
};

const StudentList: React.FC<Props> = ({ defaultUrl, students }) => {
    return (
        <div>
            {students.map(s => <StudentBubble
                defaultUrl={defaultUrl}
                student={s}></StudentBubble>)}
        </div>
    );
}

export default StudentList;
