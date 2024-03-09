import { styled } from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%,-50%);
    background: transparent;
    padding: 0;
    border: 0;
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    form {
        width: 0;
        button {
            position: relative;
            top: 20px;
            right: 60px;
            @media screen and (max-width:615pc) {
                right: 80px;
            }
        }
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternaFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} aoAlternaFavorito={aoAlternaFavorito} />
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom