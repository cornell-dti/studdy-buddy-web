import React from 'react';
import Jitsi from 'react-jitsi';

import './ClassCall.scss';

export interface Props {
}

const ClassCall: React.FC<Props> = ({ }) => {
    return (
        <Jitsi config={{
            prejoinPageEnabled: false
        }} />
    );
}

export default ClassCall;
