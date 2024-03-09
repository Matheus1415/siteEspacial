import styled from "styled-components"
import { Imagem } from "../Galeria/Imagen"

const Overlay = styled.div`
    background-color:  rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294;
`;

export const ModalZoom = ({foto}) =>{
    return(
        <>
            {
                foto &&
                <>
                    <Overlay/>
                    <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true}/>
                        <form action="dialog">    
                            <button>fechar Modal</button>
                        </form>
                    </DialogEstilizado>

                </>
            }
        </>
    )
}