import { combineReducers, createStore, Dispatch } from 'redux';

import { Action, Actions } from './actions';
import { ChatMessage, Course } from './types';

let currentSave: Course[] | null = null;

export function saveCourses(courses: Course[]) {
    try {
        localStorage.setItem('courses', JSON.stringify(courses));

        currentSave = courses;
    } catch (error) {
        console.warn(error);
    }
}

export function loadCourses() {
    try {
        const raw = localStorage.getItem('courses');

        if (!raw) {
            return [];
        }

        const value = JSON.parse(raw);

        if (!Array.isArray(value)) {
            return [];
        }

        return value as Course[];
    } catch (error) {
        console.warn(error);
    }

    return [];
}

export function courses(state = loadCourses(), action: Action) {
    switch (action.type) {
        case Actions.ADD_COURSES:
            return [...state, ...action.courses];
        default:
            return state;
    }
}

export function selectedCourse(state = null, action: Action) {
    switch (action.type) {
        case Actions.SELECT_COURSE:
            return action.courseId;
        default:
            return state;
    }
}

export function chats(state = {} as { [key: string]: ChatMessage[] | undefined }, action: Action) {
    switch (action.type) {
        case Actions.SEND_CHAT:
            const id = action.message.courseId

            return {
                ...state,
                [id]: [
                    ...state[id] ?? [],
                    action.message
                ]
            };
        default:
            return state;
    }
}

declare module "redux" {

}

// TODO: This is just a type transformation, albeit a complicated one.
function combineReduxReducers<T extends { [key: string]: (...args: any) => any }>(reducers: T) {
    return combineReducers<{ [key in keyof T]: ReturnType<T[key]> }, Action>(reducers);
}

declare module "react-redux" {
    interface DefaultRootState {
        courses: ReturnType<typeof courses>,
        selectedCourse: ReturnType<typeof selectedCourse>;
        chats: ReturnType<typeof chats>
    }

    export function useDispatch<A extends Action>(): Dispatch<A>;
}

const smApp = combineReduxReducers({
    courses,
    selectedCourse,
    chats
} as const);

const store = createStore(smApp);

// TODO: Probably shouldn't use subscribe for this
store.subscribe(() => {
    const state = store.getState();

    if (state.courses !== currentSave) {
        saveCourses(state.courses);
    }
});

export default store;