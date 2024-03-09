import styled from "styled-components"
import {Titulo} from "../Titulo/index"
import {Populares} from "./Populares"
import {Tags} from "./Tags"
import {Imagem} from './Imagen'


const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

export const Galeria = ({fotos, aoFotoSelecionada}) =>{
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    {fotos.map(foto => <Imagem
                        aoZoomSolicitado={aoFotoSelecionada}
                        key={foto.id} 
                        foto={foto}
                    />)}
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}