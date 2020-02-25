import React, { useEffect, useState } from "react"
import { Transition } from "react-transition-group"
import StyledFirstAnimation from "./StyledFirstAnimation"

const FirstAnimation = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  useEffect(() => {
    const timeStamp = new Date().getTime()
    if (window.localStorage.getItem("time") === null || timeStamp - window.localStorage.getItem("time") > 3000) {
      setIsFirstVisit(true)
      window.localStorage.setItem("time", timeStamp)
    }
  }, [isFirstVisit])

  return (
    <React.Fragment>
      <Transition in={isFirstVisit} timeout={4000} unmountOnExit>
        {state => (
          <StyledFirstAnimation state={state}>
            <div className='topFirstAnimation'>
              <div className='topLeftFirstAnimation'>
                <i className='firstAnimationIcon fas fa-film'></i>
              </div>
              <div className='topRightFirstAnimation'>
                <h1 className='firstAnimationText'>
                  <span>
                    <span className='firstAnimationTextColorful'> MOVIE </span>Db API
                  </span>
                </h1>
              </div>
            </div>
            <div className='bottomFirstAnimation'></div>
          </StyledFirstAnimation>
        )}
      </Transition>
    </React.Fragment>
  )
}

export default FirstAnimation
