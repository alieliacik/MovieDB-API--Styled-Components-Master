import styled, { keyframes } from "styled-components"
import homeImage from "../../assets/Images/homePageBackgroundImage.jpg"

export const amblemAnimation = keyframes`
from {opacity: 0}
to {opacity: 1}
`

const StyledHomePage = styled.section`
  background-image: linear-gradient(140deg, rgba(194, 54, 22, 0.1), rgba(194, 54, 22, 0.6)), url(${homeImage});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;

  .mainContent {
    font-size: 3rem;
    font-weight: bold;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 11rem;
    margin-left: 8rem;

    & > span {
      display: block;

      &:last-child {
        font-size: 2.2rem;
        margin-top: 2rem;
        border-radius: 2px;
        letter-spacing: 1px;
        color: rgba(194, 54, 22, 1);
        background-color: #192a56;
        width: fit-content;
        padding: 0.8rem 2rem;
        animation: ${amblemAnimation} 2s ease;
      }
    }

    .colorWhite {
      color: white;
    }
  }
`
export default StyledHomePage
