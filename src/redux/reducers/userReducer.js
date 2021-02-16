import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";

const initalState ={ 
    authenticated = false,
    credentials: {}, 
    likes: [], 
    notifications: []
}