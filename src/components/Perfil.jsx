/* eslint-disable react/prop-types */ 
import styled from "styled-components";
import { MdOutlineMailLock } from "react-icons/md";
import supbaselogo from "../assets/supabaselogo.png"
export function Perfil({ foto, name,email }) {
  return (
    <Container>
      <section className="header">
        <div className="contentImg">
          <img src={foto} />
        </div>
        <span>{name}</span>
        
      </section>
      <section className="footer">
        <div className="content">
          <MdOutlineMailLock />
          <span>{email}</span>
        </div>
      </section>
      <div className="contentLogosupa">
           <img src={supbaselogo} className="logo supabase" alt="Vite logo" />
      </div>
   
    </Container>
  );
}
const Container = styled.div`
position:relative;
background-color:#89ab9a;
/* background: #89ab9a; */
/* background: -webkit-linear-gradient(bottom left, #262827, #29372F); */
/* background: -moz-linear-gradient(bottom left, #262827, #29372F); */
/* background: linear-gradient(to top right, #262827, #29372F); */
 
  height: 100%;
  width: 100%;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  .header {
    display: flex;
    width: 100%;

    align-items: center;
    gap: 10px;
    .contentImg {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
    span {
      font-weight: 500;
    }
  }
  .footer {
    margin-left: 10px;
    display: flex;
    padding:10px;
    align-items: center;
    color: #b5a8a8;
    background-color: #b4ecb1;
    border-radius: 10px;
    .content{
        display: flex;
        align-items: center;
        gap: 10px;
        color:#0a0b0a;
    }
  }
  .contentLogosupa{
    position:absolute;
    right:0;
    top:0;
    transform:translateY(-30%) translateX(20%);
  }
`;