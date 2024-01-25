/* eslint-disable no-unused-vars */
import {atom} from "recoil";

export const userState = atom({
    key: "useState",
    default : {
        isloading: true,
        userEmail: null
    },
});