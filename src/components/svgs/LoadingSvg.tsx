import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border-width: 0.3rem;
  border-style: solid;
  border-color: ${({theme})=> theme.colors.lightCardText};
  width: 2.5rem; /* Reduced width */
  height: 2.5rem; /* Reduced height */
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;
  border-bottom-style: dotted;

  &:before,
  &:after {
    content: "";
    width: 0.3rem; 
    height: 0.3rem; 
    border-radius: 50%;
    background: ${({theme})=> theme.colors.lightCardText};
    position: absolute;
    left: 0.2rem; 
  }

  &:before {
    top: 0.05rem; 
  }

  &:after {
    bottom: 0.05rem; 
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Create functional component
function Loading() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}

export default Loading;
