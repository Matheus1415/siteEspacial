import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
    max-width: 90%;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 560px;
    max-width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    &:focus{
        box-shadow: 1px 1px 15px 4px #092851;
    }
    
`

const IconeLupa = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 38px;
    height: 38px;
    @media screen and (max-width: 768px){
        top: 18px;
        right: 15px;
    }
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto