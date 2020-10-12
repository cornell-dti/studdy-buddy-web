import React from 'react'

import Button from './Button';

import './RemoveCourseButton.scss';

export interface Props {
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
