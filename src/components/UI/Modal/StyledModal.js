import styled, { keyframes } from "styled-components"

export const modalImageEnterAnimation = keyframes`
  0% {transform:translate(-50%,10%) scale(0); opacity:0;}
  50% { transform:translate(-50%,10%) scale(1); opacity:1;}
  60% { transform:translate(-50%,10%) scale(1)}
  100% {transform: translate(-50%,-60%) scale(1)}
`

export const overviewEnterAnimation = keyframes`
  0% {transform:translate(-50%, -50%) scale(0)}
  60% { transform:translate(-50%, -40%) scale(0);height: 20vh;}
  64% { transform:translate(-50%, -40%) scale(0);height: 20vh;}
  65% { transform:translate(-50%, -40%) scale(1);height: 30vh;}
  100% {transform:translate(-50%, -23%) scale(1)}
`
export const modalImageExitAnimation = keyframes`
  0% {transform: translate(-50%,-60%) scale(1)}
  40% { transform:translate(-50%,10%) scale(1)}
  50% {transform:translate(-50%,8%) scale(1)}
  60% {transform:translate(-50%,30%) scale(1)}
  85% {transform:translate(-50%, -170%) scale(0)}
  100% {transform:translate(-50%, -170%) scale(0)}
`

export const overviewExitAnimation = keyframes`
  0% {transform:translate(-50%, -23%) scale(1)}
  35% { transform:translate(-50%, -40%) scale(1)}
  50% { transform:translate(-50%, -40%) scale(0)}
  100% {transform:translate(-50%, -50%) scale(0)}
`

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;

  .modalImage {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 80%;
    height: 37vh;
    border-radius: 3px;
    background-color: transparent;
    background-image: ${props => `url(http://image.tmdb.org/t/p/original//${props.modalContent.backdrop_path})`};
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    animation: ${modalImageEnterAnimation} 2.5s ease-in;
    clip-path: polygon(0 0, 100% 0, 100% 91%, 0 100%);
    animation-fill-mode: forwards;
    z-index: 50;
  }

  .modalImageContent {
    height: 12rem;
    background-image: linear-gradient(170deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 8%, transparent 28%);
    visibility: hidden;
  }
  .ratingStars {
    font-size: 3.5rem;
    background-image: ${props => `linear-gradient(90deg, rgba(251, 197, 49, 1) ${props.rating}%, transparent ${props.rating}%)`};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: absolute;
    top: -1%;
    left: 1%;
  }

  .fa-window-close {
    color: white;
    position: absolute;
    font-size: 2.5rem;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.3s;
    text-shadow: 0 1.2rem 2.3rem rgba(47, 54, 64, 1);

    &:hover {
      transform: scale(1.2);
    }
  }

  .overview {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 79.5%;
    height: 45vh;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: rgba(220, 221, 225, 1);
    box-shadow: inset 0px 1rem 2rem rgba(47, 54, 64, 0.7);
    animation: ${overviewEnterAnimation} 2.5s ease-in;
    animation-fill-mode: forwards;
    z-index: 40;
  }

  .overviewContent {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(47, 54, 64, 0.5);
    }
  }

  .overviewTitle {
    font-size: 2.7rem;
    font-weight: 700;
    margin-top: 5rem;
    margin-left: 2rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    font-family: "Caveat";

    border-bottom: 1px solid rgba(47, 54, 64, 0.3);
    border-left: 6px solid rgba(47, 54, 64, 0.3);
  }

  .overviewText {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    padding: 1rem 2rem;
    font-family: "Kalam";
  }

  .overviewStats {
    display: flex;
    padding: 1.3rem 1.5rem;
    margin-top: auto;
    color: rgba(245, 246, 250, 1);
    background-color: rgba(39, 60, 117, 0.9);
    box-shadow: 0.75rem 0 1.5rem rgba(47, 54, 64, 0.7);

    & > span {
      font-size: 1.2rem;
      margin-right: 2rem;
      font-family: "Lato", sans-serif;
      text-transform: uppercase;

      & > .far,
      & > .fas {
        margin-right: 0.6rem;
      }
    }
  }
`

export const modalImageContentDoneAnimation = keyframes`
  0% {opacity:0; transform: translateY(-2rem);}
  60% {transform: translateY(-2rem); visibility: visible }
  100% {opacity:1;translateY(0); visibility: visible}
`
export const StyledContainer = styled.div`
  & > .modal-exit-active .modalImage {
    animation: ${modalImageExitAnimation} 2.5s ease-in;
  }

  & > .modal-exit-active .overview {
    animation: ${overviewExitAnimation} 2.5s ease-in;
  }

  & > .modal-enter-done .modalImageContent {
    animation: ${modalImageContentDoneAnimation} 0.5s ease-in;
    animation-fill-mode: forwards;
  }
  & > .modal-exit-active .modalImageContent {
    visibility: visible;
  }
`
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 30;
`

export default StyledModal
