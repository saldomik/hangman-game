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

interface BaseStructureProp {
  isMobile: boolean;
}

export const BaseStructure = styled.div<BaseStructureProp>`
  position: relative;
  & > div:first-child {
    width: ${(props) => (props.isMobile ? '4px' : '10px')};
    height: ${(props) => (props.isMobile ? '25px' : '50px')};
    position: absolute;
    background-color: black;
    right: 100px;
  }

  & > div:nth-child(2) {
    width: ${(props) => (props.isMobile ? '100px' : '200px')};
    height: ${(props) => (props.isMobile ? '4px' : '10px')};
    background-color: black;
    position: absolute;
    right: 100px;
  }

  & > div:nth-child(3) {
    width: ${(props) => (props.isMobile ? '4px' : '10px')};
    height: ${(props) => (props.isMobile ? '250px' : '500px')};
    background-color: black;
    margin: auto;
  }

  & > div:nth-child(4) {
    width: ${(props) => (props.isMobile ? '125px' : '250px')};
    height: ${(props) => (props.isMobile ? '4px' : '10px')};
    background-color: black;
    margin: auto;
  }
`;
