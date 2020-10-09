import React from 'react';
import styled from 'styled-components';


const Container = (props) => {
    const { children, margin, padding, background, width, height, display, direction, justify, flex } = props;
    const StyledContainer = styled.div`
        display: ${display};
        margin: ${margin};
        padding: ${padding};
        background: ${background};
        width: ${width};
        height: ${height};
        flex-direction: ${direction};
        justify-content: ${justify};
        flex: ${flex};
    `
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container
