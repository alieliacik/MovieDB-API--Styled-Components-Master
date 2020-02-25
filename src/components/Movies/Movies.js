import React from "react"
import Pagination from "@material-ui/lab/Pagination"

import StyledContainer, { Row, Card, PaginationDiv } from "./StyledMovies"

const Movies = props => {
  return (
    <StyledContainer>
      <Row>
        {props.movies !== null &&
          props.movies.map(
            res =>
              res.poster_path &&
              res.backdrop_path && (
                <Card key={res.id} res={res} showModal={props.showModal}>
                  <div className='front'>
                    <h1 className='ratingFront'>{res.vote_average}</h1>
                  </div>
                  <div className='back'>
                    <div className='wrapper'>
                      <div className='titleBox'>
                        <h1 className='title'>{res.title}</h1>
                      </div>
                      <div className='ratingVoteCount'>
                        <h1 className='rating'>{res.vote_average}</h1>
                        <h3 className='voteCount'>{res.vote_count} VOTE</h3>
                      </div>
                      <div className='languageReleaseDate'>
                        <span className='language'>
                          <i className='fontawasomeIcons fas fa-globe-americas'></i>
                          {res.original_language}
                        </span>
                        <span className='releaseDate'>
                          <i className='fontawasomeIcons far fa-calendar-alt'></i>
                          {res.release_date.slice(0, 4)}
                        </span>
                      </div>
                      <div className='btnBox'>
                        <button className='btn' onClick={() => props.openModal(res)}>
                          <span className='btnText'>OVERVIEW</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
          )}

        <PaginationDiv>
          <Pagination count={props.totalPageCount} page={props.currentPage} shape='rounded' onChange={props.paginationHandler} />
        </PaginationDiv>
      </Row>
    </StyledContainer>
  )
}

export default Movies
