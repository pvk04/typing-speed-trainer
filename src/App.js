import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetTest } from './store/slices/typingSlice';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import Statistics from './components/Statistics';
import ResultScreen from './components/ResultScreen';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

function App() {
  const { isTestFinished } = useSelector((state) => state.typing);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(resetTest());
  };

  return (
    <Container>
      <Header>Typing Speed Trainer</Header>
      {!isTestFinished ? (
        <>
          <TextDisplay />
          <TextInput />
          <Statistics />
        </>
      ) : (
        <ResultScreen onRestart={handleRestart} />
      )}
    </Container>
  );
}

export default App;
