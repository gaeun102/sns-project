import { SIGN_IN,SIGN_UP } from "./ActionType";

export const signinAction=(data)=>async(dispath)=>{

    try{

        const res=await fetch("http://localhost:3000/signin",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Basic" +btoa(data.email + ":" + data.password),
            }
        })
        const token=res.headers.get("Authorization");
        localStorage.setItem("token",token);
        dispath({type:SIGN_IN, payload:token});

        console.log("signin user :", token)

    }catch(error){
        console.log(error)
    }

    }


    export  const signupAction=(data)=>async(dispath)=>{

        try{
    
            const res=await fetch("http://localhost:3001/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json", 
                },
                body:JSON.stringify(data)
            })
            const user=await res.json();
            console.log("signup user :", user)
          
            dispath({type:SIGN_UP, payload:user});
        }catch(error){
            console.log(error)
        }
    
        }
    




