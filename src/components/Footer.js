import React, {useState, useEffect} from "react";
import "../App.scss";
import styled from 'styled-components'

const FooterText = styled.div`
  margin: 8% auto;
  color: #2a87d0;
`;

function Footer(props){
    return(
        <FooterText>
            <p>Thank you for coming!</p>
        </FooterText>
    );
}

export default Footer;