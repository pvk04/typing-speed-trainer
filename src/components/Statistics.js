import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StatsWrapper = styled.div`
  margin-top: 20px;
`;

function Statistics() {
    const { wpm, errors } = useSelector((state) => state.typing);

    return (
        <StatsWrapper>
            <p>WPM: {wpm}</p>
            <p>Errors: {errors}</p>
        </StatsWrapper>
    );
}

export default Statistics;
