import styled from "styled-components";

const Figure = styled.figure`
    position: relative;
    width: ${props => (props.$Expandir ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    & > img {
        max-width: 100%;
        border-radius: 20px;
    }

    figcaption {
        margin: 0;
        width: 100%;
        height: 100%;
        max-height: 100px;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        left: 0px;
        bottom: 0px;

        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;

        & > h3{text-align:left; display:inline;}

        & > footer{
            display: flex;
            flex-direction: row;
            
            & > button{
                border: 0;
                width: 20px;
                height: 20px;
                margin: 5px;
            }

            & > #Curtir{  background: transparent url('public/icones/favorito-ativo.png') no-repeat;  }
            & > #Expandir{  background: transparent url('public/icones/expandir.png') no-repeat;  }

        }

    }
`;

export const Imagem = ({ foto }) => {
    return (
        <Figure>
            <img src={`public/public/${foto.path}`} alt="" />
            <figcaption>
                <span>
                    <h3>{foto.titulo}</h3>
                    <p>{foto.fonte}</p>
                </span>
                <footer>
                    <button id="Curtir"></button>
                    <button id="Expandir"></button>
                </footer>
            </figcaption>
        </Figure>
    );
};
