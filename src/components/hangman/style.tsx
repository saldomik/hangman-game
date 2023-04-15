import styled from 'styled-components';

export const Head = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: absolute;
  border: 5px solid black;
  top: 50px;
  right: -20px;
`;

export const Body = styled.div`
  width: 10px;
  height: 150px;
  background-color: black;
  position: absolute;
  top: 110px;
  right: 5px;
`;

export const Arm = styled.div`
  width: 10px;
  height: 50px;
  position: absolute;
  background-color: black;
  right: 5px;
`;

export const Leg = styled.div``;

export const BaseStructure = styled.div`
  position: relative;
  & > div:first-child {
    width: 10px;
    height: 50px;
    position: absolute;
    background-color: black;
    right: 5px;
  }

  & > div:nth-child(2) {
    width: 200px;
    height: 10px;
    background-color: black;
    position: absolute;
    right: 5px;
  }

  & > div:nth-child(3) {
    width: 10px;
    height: 500px;
    background-color: black;
    margin: auto;
  }

  & > div:nth-child(4) {
    width: 250px;
    height: 10px;
    background-color: black;
    margin: auto;
  }
`;
