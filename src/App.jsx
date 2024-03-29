import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import { Footer } from "./componentes/Footer"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  overflow: none;
`

const AppContainer = styled.div`
  max-width: 100%;
  max-width: 1260px;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  padding: 10px;

  @media screen and (max-width: 870px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

`

const ConteudoGaleria = styled.section`
  width: 100%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  @media screen and (max-width: 800px){
      max-width: 100%;
  }
`

const App = () => {

  const fotoTitulo = fotos.map(fotos => fotos.titulo)

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtroDigitado, setFiltroDigitado] = useState(fotoTitulo)
  console.log(filtroDigitado)

  const aoAlternaFavorito=(foto) =>{
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita:!fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoGaleria =>{
      return{
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }
  
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternaFavorito={aoAlternaFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>  
          <Footer/>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternaFavorito={aoAlternaFavorito}
      />    
    </FundoGradiente>
  )
}

export default App
