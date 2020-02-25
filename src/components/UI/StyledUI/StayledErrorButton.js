import styled from "styled-components"

const StyledErrorButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 3rem;
  right: 2rem;
  padding: 1.3rem;
  border: none;
  color: ${props => (props.error ? "rgba(25, 42, 86, 1)" : "rgba(232, 65, 24,1.0)")};
  background-color: #eee;
  box-shadow: 0 1rem 2rem rgba(25, 42, 86, 1);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;
  z-index: 1;
  & > i {
    margin-right: 1rem;
  }

  &:focus {
    outline: none;
  }
`

export default StyledErrorButton
