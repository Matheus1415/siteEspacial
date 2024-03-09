import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background: ${props => `url(${props.$backgroundImage})` } no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    width: 900px; 
`;



const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({texto, backgroundImage}) => {
    return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner