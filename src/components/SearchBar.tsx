import React, { useState } from 'react';
import { Course } from '../types';

import { searchCourses } from '../hooks';

import './SearchBar.scss';

export interface Props {
    onSelect: (course: Course) => void;
}

const SearchBar: React.FC<Props> = ({ onSelect }) => {
    const [search, setSearch] = useState<string>('');
    const [results, clear] = searchCourses(search);
    return (
        <div className={`sm-searchbar ${results.length > 0 ? 'dropdown' : ''}`}>
            <input value={search} onChange={(ev) => {
                if (typeof ev.target.value === 'string') {
                    setSearch(ev.target.value);
                } else {
                    setSearch('');
                }
            }}></input>
            <ul className="sm-dropdown">
                {results.map((r) => {
                    return <li key={r.courseId}><button onClick={() => {
                        setSearch('');
                        clear();
                        onSelect(r);
                    }}>{r.subject} {r.courseNumber}: {r.title}</button></li>
                })}
            </ul>
        </div>
    );
};

export default SearchBar;