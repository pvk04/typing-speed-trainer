import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, finishTest, startTest } from '../store/slices/typingSlice';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  font-size: 18px;
  margin-top: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

const TextInput = () => {
    const dispatch = useDispatch();
    const { text, isTestFinished, startTime } = useSelector((state) => state.typing);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;

        if (value.length === 1 && !startTime) {
            dispatch(startTest()); // Запуск теста при начале ввода
        }

        setInputValue(value);
        dispatch(updateUserInput(value));

        // Проверка, достиг ли пользователь конца текста
        if (value.length === text.length) {
            dispatch(finishTest());
        }
    };

    return (
        <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onPaste={(e) => e.preventDefault()}
            disabled={isTestFinished}
            autoFocus
        />
    );
}

export default TextInput;
