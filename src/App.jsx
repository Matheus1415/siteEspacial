import styled from "styled-components"
import {EstiloGlobal} from "./componentes/EstilosGlobais/index"
import { Cabesalho } from "./componentes/Cabesalho";
import { Lateral } from "./componentes/Lateral";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

function App() {

  return (
    <FundoGradiente>
      <EstiloGlobal /> 
      <Cabesalho/>
      <Lateral/>
    </FundoGradiente>
  )
}

export default App
