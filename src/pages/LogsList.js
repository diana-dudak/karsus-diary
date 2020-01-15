import React from 'react';
import styled from "styled-components";

import LogCard from "../components/LogCard";

const ListTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1rem;
`;

const List = styled.div`
 >*+*{
   margin-top: 1rem;
 }
`;

const LogsList = () => {
  return (
    <>
      <ListTitle>Logs List</ListTitle>
      <List>
        <LogCard />
        <LogCard />
        <LogCard />
      </List>
    </>
  );
};

export default LogsList;