import styled from "styled-components"
import tags from "./tags.json"

// Defina os styled-components fora da função de componente
const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Paragrafo = styled.p`
    font-size: 24px;
    color: white;
`;

const ContainerButton = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    display: inline-block;
    font-size: 18px;
    color: white;
    background-color: rgba(63, 102, 243, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition:  font-size 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    width: 100%;
    max-width: 138px;
    height: 50px;

    &:hover{
        font-size: 20px;
        box-shadow: 1px 5px 10px 5px rgba(0, 16, 75, 0.3);
    }
`;

export const Tags = () => {
    return (
        <TagsContainer>
            <Paragrafo>Buscar pro tags:</Paragrafo>
            <ContainerButton>
                {tags.map(tag => <Button key={tag.id}>{tag.titulo}</Button>)}   
            </ContainerButton>
        </TagsContainer>
    )
}
