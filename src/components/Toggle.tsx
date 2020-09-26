import React, { KeyboardEvent, useState } from "react";

import './Toggle.scss';

let id = 0;

interface Props {
    checked: boolean;
    onChange: (newValue: boolean) => void;
}

const Toggle: React.FC<Props> = ({ checked, onChange }) => {
    const [labelid] = useState(() => {
        return `toggle-id-${id++}`;
    });

    return <div role="switch" aria-checked={checked} tabIndex={1} onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            onChange(!checked);
        }
    }}  className={`sm-toggle ${checked ? 'checked' : ''}`}>
        <input aria-hidden={true} id={labelid}
            type="checkbox"
            checked={checked} onChange={(event) => {
                onChange(event.target.checked);
            }}>
        </input>
        <label aria-hidden={true} htmlFor={labelid}>Switch</label>
    </div>
};

export default Toggle;