import { useEffect, useState } from "react";
import { Course } from "./types";

import axios from "axios";

export const searchCourses = (search: string) => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        if (!search || search.length <= 1)
            return;

        axios.get(`http://localhost:5000/courses?search=${encodeURI(search)}`).then((res) => {
            setCourses(res.data);
        }).catch(err => {
            console.log(err);
            setCourses([]);
        });
    }, [search]);

    const clearCourses = () => {
        setCourses([]);
    };

    return [courses, clearCourses] as const;
};

const courses = JSON.parse(localStorage.getItem('mycourses') ?? '[]') as Course[];

export const useMyCourses = () => {
    const [myCourses, _setMyCourses] = useState<Course[]>(courses);

    const setMyCourses = (courses: Course[]) => {
        localStorage.setItem('mycourses', JSON.stringify(courses));
        _setMyCourses(courses);
    };

    return [myCourses, setMyCourses] as const;
};
