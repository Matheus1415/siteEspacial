
export const ModalZoom = ({foto}) =>{
    return(
        <>
            <dialog open={!!foto}>
                <p>Meu paragrafo</p>
                <form action="dialog">    
                    <button>fechar Modal</button>
                </form>
            </dialog>
        </>
    )
}