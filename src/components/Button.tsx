import React from 'react'

import './Button.scss';

interface Props {
    onClick: () => void;
    type?: string;
    theme?: 'primary' | 'secondary' | 'transparent'
}

const Button: React.FC<Props> = ({ onClick, children, type = 'default', theme = 'primary' }) => {
    return (
        <button className={`sm-button sm-button-${type} ${theme}-button`} onClick={onClick}>
            {children}
        </button>
    );
}
export default Button;
