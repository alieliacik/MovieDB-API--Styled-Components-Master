import React from "react"
import FirstAnimation from "../UI/FirstAnimation/FirstAnimation"
import StyledHomePage from "./StyledHomePage"

const HomePage = props => {
  return (
    <>
      <FirstAnimation />
      <StyledHomePage>
        <h1 className='mainContent'>
          <span>Discover your new </span>
          <span>favorite movie with</span>
          <span>
            MOVIE <span className='colorWhite'>Db API</span>
          </span>
        </h1>
      </StyledHomePage>
    </>
  )
}

export default HomePage
