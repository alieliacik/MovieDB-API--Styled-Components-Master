import styled, { keyframes } from "styled-components"

export const ContainerAnimation = keyframes`
  0%{transform: scale(1)}
  80%{transform: scale(1);opacity: 1;}
  100%{transform: scale(0) translateX(-50%); opacity:0; }
`
export const topLeftContainerAnimation = keyframes`
  0%{width:50%; height: 85vh}
  20%{width:50%; height:50vh;}
  40%{width:40%; height:50vh;}
  60%{width:40%; height:50vh;}
  80%{width:50%; height:50vh;}
  100%{width:50%; height:50vh;}
`
export const topRightContainerAnimation = keyframes`
  0%{width:90%;}
  20%{width:90%;}
  40%{width:58%;}
  60%{width:58%;}
  80%{width:90%;}
  100%{width:90%;}
`

const StyledFirstAnimation = styled.div`
  display: ${props => (props.state === "exited" || props.state === "entered" ? "none" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  background-color: black;
  z-index: 999;
  animation: ${ContainerAnimation} 4.1s ease;
  animation-fill-mode: forwards;

  .topFirstAnimation {
    position: relative;
    height: 50vh;
  }

  .topLeftFirstAnimation {
    position: fixed;
    background-color: black;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 40%;
    height: 50vh;
    z-index: 2;
    animation: ${topLeftContainerAnimation} 4.1s linear;
    animation-fill-mode: forwards;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .firstAnimationIcon {
      position: absolute;
      font-size: 10rem;
      z-index: 2;

      @media (max-width: 48em) {
        font-size: 6rem;
      }
    }
  }

  .topRightFirstAnimation {
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 50vh;
    background-color: black;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    animation: ${topRightContainerAnimation} 4.1s linear;
    animation-fill-mode: forwards;

    .firstAnimationText {
      position: absolute;
      font-size: 5rem;
      padding-bottom: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      letter-spacing: 1px;
      animation-fill-mode: forwards;
      z-index: 1;

      @media (max-width: 48em) {
        font-size: 3rem;
        padding-bottom: 1.2rem;
      }

      .firstAnimationTextColorful {
        color: rgba(194, 54, 22, 1);
      }
    }
  }

  .bottomFirstAnimation {
    position: relative;
    background-color: black;
    overflow: hidden;
    height: 50vh;
    z-index: 3;
  }
`

export default StyledFirstAnimation
