import React from 'react';

import './TextInput.scss';

export interface Props {
    className?: string;
    icon?: 'send' | 'search';
    value: string;
    onChange: (value: string) => void;
}

const TextInput: React.FC<Props> = ({ className = '', icon, value, onChange, children }) => {
    return (
        <div className={className}>
            <div className={`sm-textinput ${icon ? 'icon' : ''}`}>
                <input style={icon ? {
                    backgroundImage: `url("/assets/${icon}.svg")`
                } : {}} value={value} onChange={(ev) => {
                    const currentValue = ev.target.value;

                    if (typeof currentValue === 'string') {
                        onChange(currentValue);
                    }
                }}></input>
                {children}
            </div>
        </div>
    );
};

export default TextInput;