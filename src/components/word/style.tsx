import styled from 'styled-components';

export const StyledWord = styled.div`
  display: flex;
  gap: 8px;
  margin: 30px auto;
  & input {
    display: flex;
    width: 50px;
    height: 50px;
    border-bottom: 5px solid black;
  }
`;
