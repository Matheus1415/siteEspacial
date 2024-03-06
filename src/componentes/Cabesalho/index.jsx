import styled from "styled-components"
import logo from"/public/public/imagens/logo.png"
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    & img{
        max-width: 250px;
    }

`;

export const Cabesalho = () =>{
    return(
        <HeaderEstilizado>
            <img src={logo} alt="" />
            <CampoTexto/>
        </HeaderEstilizado>
    )
}