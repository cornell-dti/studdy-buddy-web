import React from 'react';

import './Loading.scss';

export interface Props {
}

const Loading: React.FC<Props> = () => (
    <div className="sm-loading">Loading...</div>
);

export default Loading;