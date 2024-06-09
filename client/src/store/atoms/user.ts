/* eslint-disable no-unused-vars */
import {atom} from "recoil";

interface userstateprops{
    isloading: boolean,
    userEmail: string | null
}

export const userState = atom({
    key: "useState",
    default : {
        isloading: true,
        userEmail: null,
        isAdmin: false
    },
});