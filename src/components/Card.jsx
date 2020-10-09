import React from 'react';
import styled from 'styled-components';
// import Title from './Title';


const Card = (props) => {
    const { image, onClick } = props
    const CardContainer = styled.div`
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        height: 500px;
        width: 100%;
        background-image: url(${image});
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat; 
    `
    return (
        <CardContainer onClick={onClick} />
    )
}

export default Card
