import { REQ_USER } from "./Action";




export const getUserProfile=(jwt)=>async(dispatch)=>{



try {

    
    const res=await fetch ("http://localhost:5454/api/users/req",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authrization:"Bearer " +jwt
        }
    })

    const reqUser=await res.json()
    dispatch({type:REQ_USER,payload:reqUser});
    
} catch (error) {
    console.log(error);
}
}