import React from 'react';
import styled from 'styled-components';

import { SAMPLE_TEXT } from "../data"

const Card = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #302346;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-weight: bold;
`;

const CardDate = styled.span`
  opacity: 0.75;
  font-size: 14px;
`;

const CardBody = styled.div`
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LogCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Log #01</CardTitle>
        <CardDate>1 Crops Month</CardDate>
      </CardHeader>
      <CardBody>
        {SAMPLE_TEXT}
      </CardBody>
    </Card>
  );
};

export default LogCard;
