import styled from "styled-components";

export const Titulo  = styled.h2`
    color: #bcbaff;
    font-size: 32;
    text-align: ${prop => prop.$Alinhamento? prop.$Alinhamento : 'left'};
`;