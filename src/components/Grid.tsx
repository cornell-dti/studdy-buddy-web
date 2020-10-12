import React from 'react';

import './Grid.scss';

export interface Props {
    className?: string;
}

export const Grid: React.FC<Props> = ({ children, className = '' }) => <div className={`grid ${className}`}>{children}</div>;

export interface ItemProps extends Props {
    fill?: boolean;
    grow?: boolean;
}

export const Item: React.FC<ItemProps> = ({ children, grow = false, fill = false, className = '' }) => <div className={
    `item ${grow ? 'grow' : ''} ${fill ? 'fill' : ''} ${className}`
}>{children}</div>;

export interface AlignProps extends Props {
    align?: 'center';
}

export const Col: React.FC<AlignProps> = ({ children, className = '', align = '' }) => <div className={`col ${align} ${className}`}>{children}</div>;
export const Row: React.FC<AlignProps> = ({ children, className = '', align = '' }) => <div className={`row ${align} ${className}`}>{children}</div>;
