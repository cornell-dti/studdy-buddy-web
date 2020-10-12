import React from 'react'

import './Button.scss';

export interface Props {
    onClick: () => void;
    type?: string;
    theme?: 'primary' | 'secondary' | 'transparent'
}

const Button: React.FC<Props> = ({ onClick, children, type, theme = 'primary' }) => {
    return (
        <button onClick={onClick} className={[
            'sm-button',
            `${theme}-button`,
            type ? `sm-button-${type}` : ''
        ].join(' ')}>
            {children}
        </button>
    );
}
export default Button;
