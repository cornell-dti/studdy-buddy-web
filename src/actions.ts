
/*
 * Actions
 */

import { ChatMessage, Course } from "./types";

export enum Actions {
    SELECT_COURSE = 'SELECT_COURSE',
    ADD_COURSES = 'ADD_COURSES',
    SEND_CHAT = 'SEND_CHAT'
}

export function sendChat(message: ChatMessage) {
    return { type: Actions.SEND_CHAT, message } as const;
}

export function selectCourse(courseId: string) {
    return { type: Actions.SELECT_COURSE, courseId } as const;
}

export function addCourses(courses: Course[]) {
    return { type: Actions.ADD_COURSES, courses } as const;
}

export declare module ActionTypes {
    export type AddCourses = ReturnType<typeof addCourses>;
    export type SelectCourse = ReturnType<typeof selectCourse>;
    export type SendChat = ReturnType<typeof sendChat>;
};

export type Action = ActionTypes.AddCourses | ActionTypes.SelectCourse | ActionTypes.SendChat
