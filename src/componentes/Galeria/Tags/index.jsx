import { styled } from 'styled-components';
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
    @media screen and (max-width: 930px){
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 20px;
    margin: 0;
    
`;

const Tag = styled.button`
    font-size: 20px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
    @media screen and (max-width: 530px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    } 
`

const Tags = () => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
            </Div>
        </TagsContainer>
    )    
}

export default Tags