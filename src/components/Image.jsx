import React from 'react';
import styled from 'styled-components';


const Image = (props) => {
    const { src, alt, height, width, margin, radius, onClick } = props;
    const StyledImage = styled.img`
    display: block;
    width: ${width};
    height: ${height};
    margin: ${margin};
    border-radius:${radius};
    z-index: 9999;
    `
    return (
        <StyledImage src={src} alt={alt} onClick={onClick} />
    )
}

export default Image
