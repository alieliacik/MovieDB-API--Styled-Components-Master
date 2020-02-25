import React from "react"
import styled, { keyframes } from "styled-components"

const load3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledDiv = styled.div`
  font-size: 0.8rem;
  margin: 20rem auto 50rem auto;

  @media (max-width: 55em) {
    margin: 20rem auto 56rem auto;
  }
  @media (max-width: 55em) {
    margin: 20rem auto 82rem auto;
  }
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: rgba(25, 42, 86, 1);
  background: linear-gradient(to right, rgba(25, 42, 86, 1) 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${load3} 1.4s infinite linear;
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  &::after {
    background: white;
    width: 75%;
    min-height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

const Spinner = () => {
  return <StyledDiv></StyledDiv>
}

export default Spinner
