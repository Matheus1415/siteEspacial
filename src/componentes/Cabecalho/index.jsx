import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }

    
  @media screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const Cabecalho = () => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto />
    </HeaderEstilizado>)
}

export default Cabecalho