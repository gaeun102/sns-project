import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

const initialState = {
    createdComment: null,
    postComment: null,
    likeComment: null,
    unlikeComment: null,
  
};

export const commentReducer = (state = initialState, { type, payload }) => {
    if (type === CREATE_COMMENT) {
        return { ...state, createdComment: payload };
    } else if (type === GET_POST_COMMENT ) {
        return { ...state, postComment: payload };
    } else if (type === LIKE_COMMENT) {
        return { ...state, likeComment: payload };
    } else if (type === UNLIKE_COMMENT) {
        return { ...state, unlikeComment: payload };
    } else {
        return state;
    }
};