import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { Secondary, White } from '../colors';

const StyledFooter = styled.footer`
    width: 100%;
    background: ${Secondary};
    color: ${White};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <Title title="Created by Giusseppe © 2020" size='1rem' align='center'/>
        </StyledFooter>
    )
}

export default Footer
