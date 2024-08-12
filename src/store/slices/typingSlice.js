import { createSlice } from '@reduxjs/toolkit';

const texts = [
    'The quick brown fox jumps over the lazy dog',
    'A journey of a thousand miles begins with a single step',
    'To be or not to be, that is the question',
    'All that glitters is not gold',
    'The only thing we have to fear is fear itself'
];

const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
};

const initialState = {
    text: getRandomText(), // Устанавливаем случайный текст при инициализации
    userInput: '',
    wpm: 0,
    errors: 0,
    isTestFinished: false,
    startTime: null,
};

const typingSlice = createSlice({
    name: 'typing',
    initialState,
    reducers: {
        updateUserInput: (state, action) => {
            const userInput = action.payload;
            state.userInput = userInput;

            // Подсчет ошибок
            state.errors = state.text
                .slice(0, userInput.length)
                .split('')
                .filter((char, index) => char !== userInput[index]).length;

            // Подсчет WPM
            state.wpm = calculateWPM(userInput, state.startTime, state.errors);
        },
        startTest: (state) => {
            state.startTime = new Date().getTime(); // Записываем время начала
        },
        finishTest: (state) => {
            state.isTestFinished = true;
        },
        resetTest: (state) => {
            state.userInput = '';
            state.wpm = 0;
            state.errors = 0;
            state.isTestFinished = false;
            state.startTime = null;
            state.text = getRandomText(); // Выбираем новый случайный текст
        },
    },
});

const calculateWPM = (userInput, startTime, errors) => {
    if (!startTime) return 0;

    const wordsTyped = userInput.trim().split(' ').length;
    const timeTaken = (new Date().getTime() - startTime) / 60000; // Время в минутах

    const wpm = Math.floor(wordsTyped / timeTaken - errors);

    return wpm >= 0 ? wpm : 0;
};

export const { updateUserInput, finishTest, resetTest, startTest } = typingSlice.actions;
export default typingSlice.reducer;
