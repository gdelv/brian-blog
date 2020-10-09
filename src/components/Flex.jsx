import React from 'react';
import styled from 'styled-components';

const Flex = (props) => {
    const { children, justify, direction } = props;
    const FlexContainer = styled.div`
        display: flex;
        width: 100%;
        height: max-content;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: center;
    ` 
    return (
        <FlexContainer>
            {children}
        </FlexContainer>
    )
};


export default Flex
