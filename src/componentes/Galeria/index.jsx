import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
    @media screen and (max-width: 1080px){
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;

    @media screen and (max-width: 630px) {
        grid-template-columns: repeat(1, 1fr);
        align-items: center; 
        justify-content: center;
    }
    
`;


const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternaFavorito }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternaFavorito={aoAlternaFavorito}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria