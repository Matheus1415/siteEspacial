import styled from "styled-components"
import {EstiloGlobal} from "./componentes/EstilosGlobais/index"
import { Cabesalho } from "./componentes/Cabesalho";
import { Lateral } from "./componentes/Lateral";
import Banner from "./componentes/Banner";
import ImagemBanner from "./assets/banner.png"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;

`;

function App() {

  return (
    <FundoGradiente>
      <EstiloGlobal /> 
      <Cabesalho/>
      <Container>
        <Lateral/>
        <Banner backgroundImage={ImagemBanner} texto="Seja bem Vindo á Space"/>
      </Container>
    </FundoGradiente>
  )
}

export default App
