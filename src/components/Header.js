import React, {useState, useEffect} from "react";
import "../App.scss";
import styled from 'styled-components';

const HeaderTag = styled.div`
  color: red;
  `;

function Header(props){
    return(
        <HeaderTag>
            <h1>NASA Photo Of The Day</h1>
        </HeaderTag>
    );
}

export default Header;