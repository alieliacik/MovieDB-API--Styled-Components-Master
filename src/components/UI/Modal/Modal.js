import React from "react"
import { CSSTransition } from "react-transition-group"

import StyledModal, { StyledContainer, Backdrop } from "./StyledModal"

const Modal = props => {
  return (
    <StyledContainer>
      <CSSTransition in={props.showModal} timeout={2500} classNames='modal' mountOnEnter unmountOnExit>
        <StyledModal modalContent={props.modalContent} rating={Math.ceil(props.modalContent.vote_average) * 10}>
          <Backdrop onClick={props.closeModal}></Backdrop>
          <div className='modalImage'>
            <div className='modalImageContent'>
              <div className='ratingStars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <i onClick={props.closeModal} className='far fa-window-close'></i>
            </div>
          </div>
          <div className='overview'>
            <div className='overviewContent'>
              <h1 className='overviewTitle'>{props.modalContent.title}</h1>
              <h2 className='overviewText'>{props.modalContent.overview}</h2>
            </div>

            <div className='overviewStats'>
              <span className='overviewStatsLanguage'>
                <i className='fas fa-globe-americas'></i> {props.modalContent.original_language}
              </span>
              <span>
                <i className='fas fa-star'></i> {props.modalContent.vote_average}
              </span>
              <span className='releaseDate'>
                <i className='fontawasomeIcons far fa-calendar-alt'></i>
                {props.modalContent.release_date}
              </span>
              <span>
                <i className='fas fa-poll-h'></i>
                {props.modalContent.vote_count} VOTE
              </span>
              <span>
                <i className='fas fa-fire'></i>
                POPULARITY : {props.modalContent.popularity}
              </span>
            </div>
          </div>
        </StyledModal>
      </CSSTransition>
    </StyledContainer>
  )
}

export default Modal
