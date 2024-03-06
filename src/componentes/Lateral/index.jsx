import styled from "styled-components"
import { ItemNavegacao } from "./ItemNavegacao";

const ListaEstilizada = styled.ul`

    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 250px;
    padding: 20px;

`;

export const Lateral = () =>{
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="public\public\icones\home-ativo.png" 
                        iconeInativo="public\public\icones\home-inativo.png"
                        ativo                            
                    >
                        Início
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="public\public\icones\mais-vistas-ativo.png" 
                        iconeInativo="public\public\icones\mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>

                    
                    <ItemNavegacao
                        iconeAtivo="public\public\icones\surpreenda-me-ativo.png" 
                        iconeInativo="public\public\icones\surpreenda-me-inativo.png"
                    >
                        Supreenda-me
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="public\public\icones\mais-curtidas-ativo.png" 
                        iconeInativo="public\public\icones\mais-curtidas-inativo.png"
                    >
                        Mais Curtidos
                    </ItemNavegacao>

                    
                    <ItemNavegacao
                        iconeAtivo="public\public\icones\novas-ativo.png" 
                        iconeInativo="public\public\icones\novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>


                </ListaEstilizada>
            </nav>
        </aside>
    )
}