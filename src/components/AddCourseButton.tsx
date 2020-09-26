import React from 'react'

import './AddCourseButton.scss';
import Button from './Button';

interface Props {
    onClick: () => void
}

const AddCourseButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button type="add-course" onClick={onClick}>
            <img src="/assets/add.svg"></img>
        </Button>
    );
}
export default AddCourseButton;
