import React from 'react';
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const LinkLogic = ({ props, children }) => {
  return (
    <RouterLink {...props}>
      {children}
    </RouterLink>
  );
};

const Link = styled(LinkLogic)`
  text-decoration: none;
  cursor: pointer;
`;

export default Link;