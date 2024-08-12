import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TextWrapper = styled.div`
  font-size: 22px;
  line-height: 1.6;
  max-width: 600px;
  margin: 20px 0;
  word-wrap: break-word;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CorrectChar = styled.span`
  color: green;
`;

const IncorrectChar = styled.span`
  color: red;
`;

function TextDisplay() {
    const { text, userInput } = useSelector((state) => state.typing);

    const renderText = () => {
        return text.split('').map((char, index) => {
            const userChar = userInput[index];

            if (userChar === char) {
                return <CorrectChar key={index}>{char}</CorrectChar>;
            } else if (userChar) {
                return <IncorrectChar key={index}>{char}</IncorrectChar>;
            } else {
                return <span key={index}>{char}</span>;
            }
        });
    };

    return <TextWrapper>{renderText()}</TextWrapper>;
}

export default TextDisplay;
