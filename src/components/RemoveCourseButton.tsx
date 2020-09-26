import React from 'react'

import './RemoveCourseButton.scss';
import Button from './Button';

interface Props {
    onClick: () => void
}

const RemoveCourseButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button theme="transparent" type="remove-course" onClick={onClick}>
            <img src="/assets/remove.svg"></img>
        </Button>
    );
}
export default RemoveCourseButton;
