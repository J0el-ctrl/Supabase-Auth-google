/* eslint-disable react/prop-types */ 
import {  createContext, useContext, useEffect, useState } from "react";
import {supabase} from '../supabase/supabase.config';
import { useNavigate } from "react-router-dom";


// creando el contexto
const AuthContext=createContext();
// contexto que provee todo el contexto, ingreso y salida del sistema
export const AuthContextProvider=({children})=>{
    const navigate=useNavigate();
    const [user, setuser] = useState([]);
                    
    async function signInWithGoogle(){
        try {
            const {data,error}=await supabase.auth.signInWithOAuth({
                provider:"google",
            });
            if(error) throw new Error("A ocurrido un error durante la autenticación");
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function signOut(){
        const {error}=await supabase.auth.signOut()
        if(error) throw new Error("A ocurrido un error durante el cierre de sesión");
    }
    // verificar si el usuario esta logueado o no
    useEffect(() => {
        const {data:authListener}=supabase.auth.onAuthStateChange(async(event,session)=>{
            // console.log(`Supabase event ${event}`); 
            if(session==null){
                navigate("/login",{replace:true})
            }else{
                setuser(session?.user.user_metadata)
                console.log("data del usuario",session.user.user_metadata);
                navigate("/",{replace:true}); 
            }
 
        });

        return()=>{
            
            authListener.subscription;
        };
 
    }, []);
     



    return(
        <AuthContext.Provider value={{signInWithGoogle,signOut,user}} >
            {children}
        </AuthContext.Provider>
    )
}
 
// hook perzonalizado para el AuthContext
export const UserAuth=()=>{
    return useContext(AuthContext);
} 