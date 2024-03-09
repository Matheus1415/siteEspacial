import styled from "styled-components"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterPage = styled.footer`
    width: 100%;
    height: 30px;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background-color: #041833;

    & > p{
        font-size: 20px;
        color: white;
        padding: 15px;
    }
`; 

const FooterIcon = styled.footer`
    padding: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
`; 

export const Footer = () =>{
    return(
        <FooterPage>
            <FooterIcon>
                <FaInstagram style={{color:"white", fontSize:"20px"}} />
                <FaTwitter style={{color:"white", fontSize:"20px"}}/>
                <FaFacebook style={{color:"white", fontSize:"20px"}}/>
            </FooterIcon>

            <p>Desenvolvido pro ₢Matheus Pereira</p>
        </FooterPage>
    )
}