import React, { useState } from "react"
import { Route, Switch, NavLink } from "react-router-dom"

import SearchMovies from "./components/SearchMovies/SearchMovies"
import PopularMovies from "./components/PopularMovies/PopularMovies"
import TopRatedMovies from "./components/TopRatedMovies/TopRatedMovies"
import HomePage from "./components/HomePage/HomePage"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
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
    font-size:62.5%;

    @media (max-width: 55em){
      font-size: 55%;
    }
    @media (max-width: 52em){
      font-size: 50%;
    }

  }

  body {
    font-family: 'Lato', sans-serif;
  }

`

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Header = styled.header`
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

const StyledNavLink = styled(NavLink)`
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

const Footer = styled.footer`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  font-size: 1.6rem;
  background-color: #192a56;
  color: white;
`

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const closeModal = () => setShowModal(false)

  const openModal = res => {
    setShowModal(true)
    setModalContent(res)
  }

  return (
    <StyledApp>
      <GlobalStyle showModal={showModal} />

      <Header>
        <Route
          render={({ history }) => (
            <div className='logo' onClick={() => history.push("/")}>
              <i className='logoIcon fas fa-film'></i>
              <span className='logoName'>
                <span className='colorfulLogoName'>MOVIE</span> Db API
              </span>
            </div>
          )}
        />
        <nav className='navigation'>
          <ul>
            <li>
              <StyledNavLink to='/' exact>
                Home
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink to='/top-rated'>Top-Rated</StyledNavLink>
            </li>

            <li>
              <StyledNavLink to='/popular'>Popular</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/search'>Search</StyledNavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <Switch>
        <Route path='/search' render={() => <SearchMovies openModal={openModal} closeModal={closeModal} showModal={showModal} modalContent={modalContent} />} />
        <Route path='/popular' exact render={() => <PopularMovies openModal={openModal} closeModal={closeModal} showModal={showModal} modalContent={modalContent} />} />
        <Route path='/top-rated' exact render={() => <TopRatedMovies openModal={openModal} closeModal={closeModal} showModal={showModal} modalContent={modalContent} />} />
        <Route path='/' exact component={HomePage} />
      </Switch>

      <Footer>
        <p>© 2020 All Rights Reserved.</p>
      </Footer>
    </StyledApp>
  )
}

export default App
