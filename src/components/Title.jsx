import React from 'react';
import styled from 'styled-components';


const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, backColor, size, align, padding, margin } = props;
  const StyledTitle = styled.h1`
      font-size: ${size};
      border-radius: 20%;
      margin: ${margin};
      width: 100%;
      text-align: ${align}; 
      padding: ${padding};
      min-width: fit-content;
      font-family: 'Roboto', sans-serif;
      background: ${backColor};
      word-wrap: break-word;

  `;
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

export default Title;
