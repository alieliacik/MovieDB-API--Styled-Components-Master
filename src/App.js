import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import SearchMovies from "./components/SearchMovies/SearchMovies";
import PopularMovies from "./components/PopularMovies/PopularMovies";
import TopRatedMovies from "./components/TopRatedMovies/TopRatedMovies";
import HomePage from "./components/HomePage/HomePage";

import StyledApp, {
  GlobalStyle,
  Header,
  StyledNavLink,
  Footer,
} from "./StyledApp";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeModal = () => setShowModal(false);

  const openModal = (res) => {
    setShowModal(true);
    setModalContent(res);
  };

  return (
    <StyledApp>
      <GlobalStyle showModal={showModal} />

      <Header>
        <Route
          render={({ history }) => (
            <div className="logo" onClick={() => history.push("/")}>
              <i className="logoIcon fas fa-film"></i>
              <span className="logoName">
                <span className="colorfulLogoName">MOVIE</span> Db API
              </span>
            </div>
          )}
        />
        <nav className="navigation">
          <ul>
            <li>
              <StyledNavLink to="/" exact>
                Home
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="/top-rated">Top-Rated</StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="/popular">Popular</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/search">Search</StyledNavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <Switch>
        <Route
          path="/search"
          render={() => (
            <SearchMovies
              openModal={openModal}
              closeModal={closeModal}
              showModal={showModal}
              modalContent={modalContent}
            />
          )}
        />
        <Route
          path="/popular"
          exact
          render={() => (
            <PopularMovies
              openModal={openModal}
              closeModal={closeModal}
              showModal={showModal}
              modalContent={modalContent}
            />
          )}
        />
        <Route
          path="/top-rated"
          exact
          render={() => (
            <TopRatedMovies
              openModal={openModal}
              closeModal={closeModal}
              showModal={showModal}
              modalContent={modalContent}
            />
          )}
        />
        <Route path="/" exact component={HomePage} />
      </Switch>

      <Footer>
        <p>© 2020 All Rights Reserved.</p>
      </Footer>
    </StyledApp>
  );
};

export default App;
