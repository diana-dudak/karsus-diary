import React from "react";
import styled from 'styled-components';

const ParagraphComponent = ({ children }) => {
  return (
    <p>
      {children}
    </p>
  )
}

const Paragraph = styled(ParagraphComponent)`
  margin: 1rem 0;
`;

export default Paragraph;