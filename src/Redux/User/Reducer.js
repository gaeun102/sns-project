import { FOLLOW_USER, GET_USER_BY_USERNAME, GET_USER_BY_USER_IDS, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./ActionType";

const initialValue={
    reqUser:null,
    findByUsername:null,
    findByIds:null,
    followUser:null,
    unFollowUser:null,
    updateUser:null,
    searchUser:null
}
export const userReducer=(store=initialValue,{type,payload})=>{

    if(type===REQ_USER){
        return {...store, signup:payload}
    }
    else if(type===GET_USER_BY_USERNAME){
        return {...store, findByUsername:payload}
    }
    else if(type===GET_USER_BY_USER_IDS){
        return {...store, findByIds:payload}
    }
    else if(type===FOLLOW_USER){
        return {...store, followUser:payload}
    }
    else if(type===UNFOLLOW_USER){
        return {...store, unFollowUser:payload}
    }
    else if(type===SEARCH_USER){
        return {...store, searchUser:payload}
    }
    else if(type===UPDATE_USER){
        return {...store, updateUser:payload}
    }
    return store;
}
