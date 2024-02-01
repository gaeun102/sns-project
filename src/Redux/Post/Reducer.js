import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType";

const initialState = {
    createdPost: null,
    userPost: null,
    deletedPost: null,
    likePost: null,
    unlikePost: null,
    savedPost: null,
    unsavedPost: null,
    singlePost: null
};

export const postReducer = (state = initialState, { type, payload }) => {
    if (type === CREATE_NEW_POST) {
        return { ...state, createdPost: payload };
    } else if (type === GET_USER_POST) {
        return { ...state, userPost: payload };
    } else if (type === DELETE_POST) {
        return { ...state, deletedPost: payload };
    } else if (type === LIKE_POST) {
        return { ...state, likePost: payload };
    } else if (type === UNLIKE_POST) {
        return { ...state, unlikePost: payload };
    } else if (type === SAVE_POST) {
        return { ...state, savedPost: payload };
    } else if (type === UNSAVE_POST) {
        return { ...state, unsavedPost: payload };
    } else if (type === GET_SINGLE_POST) {
        return { ...state, singlePost: payload };
    } else {
        return state;
    }
};