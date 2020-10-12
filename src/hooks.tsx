import React, { useCallback, useContext, useEffect, useState } from "react";
import { Course } from "./types";

import axios from "axios";
import { useSelector } from "react-redux";

import * as firebase from 'firebase';

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

export const useMyCourses = () => {
    const courses = useSelector(state => state.courses);

    return courses;
};

export type User = { user: null, signingIn: boolean } | { user: firebase.User, signingIn: false };
export type UserState = readonly [User, firebase.auth.Error | null];

export const UserContext = React.createContext<UserState>([{
    user: null,
    signingIn: true
}, null]);

export const useRawUser = (firebase: firebase.app.App): UserState => {
    const [user, setUser] = useState<User>(() => {
        const user = firebase.auth().currentUser;

        if (user) {
            return {
                signingIn: false,
                user
            };
        } else {
            return {
                signingIn: true,
                user: null
            };
        }
    });
    const [error, setError] = useState<firebase.auth.Error | null>(null);

    const updateAuth = useCallback((user: firebase.User | null) => {
        console.log('update auth');
        if (user) {
            setUser({ signingIn: false, user });
        } else {
            setUser({
                signingIn: false,
                user: null
            });
        }
    }, []);

    useEffect(() => {
        firebase.auth().onIdTokenChanged((user) => {
            console.log('Token Changed')
            updateAuth(user);
            setError(null);
        }, (error) => {
            updateAuth(null);
            setError(error);
        });
    }, []);

    return [user, error] as const;
};

export const useUserState = () => useContext(UserContext);

export const useToken = () => {
    const [state] = useUserState();
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        if (state && state.user) {
            state.user.getIdToken().then((token) => {
                setToken(token);
                setError(null);
            }).catch(err => {
                setToken(null);
                setError(err);
            })
        }

    }, [state]);

    return [token, error] as const;
};