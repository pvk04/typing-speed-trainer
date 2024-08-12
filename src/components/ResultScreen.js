import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ResultWrapper = styled.div`
margin-top: 20px;
text-align: center;
`;

const ResultText = styled.p`
  font-size: 18px;
  color: #555;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
`;

function ResultScreen({ onRestart }) {
  const { wpm, errors } = useSelector((state) => state.typing);

  return (
    <ResultWrapper>
      <h2>Test Finished!</h2>
      <ResultText>WPM: {wpm}</ResultText>
      <ResultText>Errors: {errors}</ResultText>
      <Button onClick={onRestart}>Restart</Button>
    </ResultWrapper>
  );
}

export default ResultScreen;
