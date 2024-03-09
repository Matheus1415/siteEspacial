import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao"
import { useState } from "react";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 30%;
    max-width: 236px;

    
    @media screen and (max-width: 790px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }  

`

const BarraLateral = () => {

    const [itemAtivo, setItemAtivo] = useState(0); 

    const handleClick = (index) => {
        setItemAtivo(index); 
    };

    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                        iconeAtivo="/icones/home-ativo.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo={itemAtivo === 0}
                        onClick={() => handleClick(0)}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas-ativo.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        ativo={itemAtivo === 1}
                        onClick={() => handleClick(1)} 
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-curtidas-ativo.png" 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        ativo={itemAtivo === 2}
                        onClick={() => handleClick(2)} 
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/novas-ativo.png" 
                        iconeInativo="/icones/novas-inativo.png"
                        ativo={itemAtivo === 3}
                        onClick={() => handleClick(3)} 
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/surpreenda-me-ativo.png" 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        ativo={itemAtivo === 4}
                        onClick={() => handleClick(4)} 
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral
