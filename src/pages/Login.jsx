// import styled from "styled-components";
import reactlogo from "../assets/logoreact.png";
import viteLogo from "/vite.svg";
import supabaselogo from "../assets/supabaselogo.png";
import googlelogo from "../assets/logogoogle.png";
import { UserAuth } from "../context/AuthContext";

export function Login() {
  const {signInWithGoogle}=UserAuth();

 
  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactlogo} className="logo react" alt="React logo" />

        <img src={supabaselogo} className="logo supabase" alt="Vite logo" />
      </div>
      <h1>Vite + React + Supabase</h1>
      <img src={googlelogo} className="logo google" alt="React logo" />
      <div className="card">
        <button  onClick={signInWithGoogle} >Iniciar con Google</button>
        <p>codigo369.com</p>
      </div>
      <p className="read-the-docs">
        Supabase implementa todo el poder de PostgreSQL dsds
      </p>
    </div>
  );
}
// const Container = styled.div``;