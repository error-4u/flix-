/* eslint-disable no-unused-vars */
import { useState } from "react";
import { selector } from "recoil";
import {courseState} from "../atoms/course"

export const isCourseLoading = selector({
    key: "isCourseLoading",
    get : ({get}) => {
        const state = get(courseState);
        return state.isLoading;
    },
});

// this will return all the course details 
export const courseDetails = selector({
    key: "courseDetailState",
    get : ({get}) => {
        const state = get(courseState);
        return state.course;
    },
});

export const courseTitleState = selector({
    key: "courseTitleState",
    get: ({get}) => {
        const state = get(courseState);
        if (state.course){
        return state.course.title;
        }
        return "";
    },
});

export const coursePrice = selector({
    key: "coursePriceState",
    get: ({get}) => {
        const state = get(courseState);
        if (state.course){
        return state.course.price;
        }
        return "";
    },
});

export const courseImage = selector({
    key: "courseImageState",
    get: ({get}) => {
        const state = get(courseState);
        if (state.course){
        return state.course.image;
        }
        return "";
    },
});

