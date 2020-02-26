import styled, { createGlobalStyle } from "styled-components"
import { NavLink } from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
     font-size:62.5%;         /* 1rem = 10px; */

    @media (max-width: 55em){
      font-size: 55%;         /* 1rem = 8.8px; */ 
    }

    @media (max-width: 52em){
      font-size: 50%;         /* 1rem = 8px; */
    }

  }

  body {
    font-family: 'Lato', sans-serif;
    overflow-y: ${props => (props.showModal ? "hidden" : "scroll")};
  }

`

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const Header = styled.header`
  display: flex;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background-color: rgba(25, 42, 86, 1);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  z-index: 1;

  @media (max-width: 52em) {
    flex-direction: column;
    padding: 0;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logoIcon {
    font-size: 5rem;
    color: white;
    margin-right: 2rem;
  }

  .logoName {
    color: white;

    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .colorfulLogoName {
    color: rgba(232, 65, 24, 1);
  }

  .navigation {
    & > ul {
      display: block;
      list-style: none;
      display: flex;
      justify-content: center;
      font-size: 1.6rem;
    }
  }
`

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: inline-block;
    min-width: 9.5rem;
    text-align: center;
    color: white;
    background-color: rgba(25, 42, 86, 1);
    padding: 2.1rem 2rem;
    letter-spacing: 0.5px;
    text-decoration: none;
    border-bottom: 0.4rem solid transparent;
    cursor: pointer;
  }

  &:hover {
    border-bottom: 0.4rem solid rgba(251, 197, 49, 1);
    transition: all 0.8s;
  }

  &:active {
    background-color: rgba(156, 136, 255, 0.3);
    transition: all 0.1s;
  }

  &.active {
    border-bottom: 0.4rem solid rgba(251, 197, 49, 1);
  }
`

export const Footer = styled.footer`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  font-size: 1.6rem;
  background-color: #192a56;
  color: white;
`

export default StyledApp
