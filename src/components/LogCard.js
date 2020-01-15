import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
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

const LogCard = ({ data = { id: 1, title: "Title", date: "x xx xxxx", content: SAMPLE_TEXT } }) => {
  return (
    <Card>
      <Link to={`/log/${data.id}`}>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDate>{data.date}</CardDate>
        </CardHeader>
        <CardBody>{data.content}</CardBody>
      </Link>
    </Card>
  );
};

export default LogCard;
