import styled from "styled-components"

const StyledSearchMovies = styled.form`
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 75em) {
    width: 60%;
  }
  @media (max-width: 48em) {
    width: 80%;
  }

  .inputField {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;

    color: #eee;
    width: 90%;
    margin: 1rem -3.5rem 1rem 0;
    padding: 1rem;
    text-indent: 0.7rem;
    border: none;
    background-color: rgba(156, 136, 255, 1);
    transition: all 0.2s;

    &:focus {
      outline: none;
      width: 100%;
    }

    &::placeholder {
      font-size: 1.6rem;
      color: white;
    }
  }

  .inputButton {
    color: white;
    background-color: #9c88ff;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    .inputIcon {
      font-size: 1.8rem;
      color: #eee;
    }
  }
`

export default StyledSearchMovies
