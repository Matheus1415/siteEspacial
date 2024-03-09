import { useState } from "react"
import { styled } from "styled-components"

const ItemListaEstilizado = styled.li`
    width:400px ;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#9894ff' : 'white'};
    transition: color 0.6s ease;
    border-radius: 10px;
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;

    @media screen and (max-width: 790px) {
        background-color: ${ props => props.$ativo ? '#9894ff' : '#04244F'};
        color: white;
        transition: background-color 0.6s ease;
        margin: 10px;
        text-align: center;
        max-width: 240px;
    } 

    & > img{
        transition: 0.6s ease;
    }
`


const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false, onClick }) => {
    return (
        <ItemListaEstilizado $ativo={ativo} onClick={onClick}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    );
};


export default ItemNavegacao