import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import { Galeria } from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import { ModalZoom } from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer =  styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const ContainerMain = styled.main`
  display: flex;
  gap: 24px;
`;

const ContainerGHaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow:1;
`;

function App() {

  const [fotosGleria,setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(fotos[0])

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
      <Cabecalho />
      <ContainerMain>
        <BarraLateral />
        <ContainerGHaleria>
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
          />
          <Galeria 
            fotos={fotos}  
            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
          />
        </ContainerGHaleria>
      </ContainerMain>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada}/>
    </FundoGradiente>
  )
}

export default App
