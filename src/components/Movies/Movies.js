import React from "react"
import Pagination from "@material-ui/lab/Pagination"

import StyledContainer, { Row, Card, PaginationDiv } from "./StyledMovies"

const Movies = (props) => {
  return (
    <StyledContainer>
      <Row>
        {props.movies !== null &&
          props.movies.map((res) => (
            <Card key={res.id} res={res} showModal={props.showModal}>
              <div className='front'>
                <h1 className='ratingFront'>{res.vote_average}</h1>
              </div>
              <div className='back'>
                <h1 className='title'>{res.title}</h1>
                <h1 className='rating'>{res.vote_average}</h1>
                <h3 className='voteCount'>{res.vote_count} VOTE</h3>
                <span className='language'>
                  <i className='fontawasomeIcons fas fa-globe-americas'></i>
                  {res.original_language}
                </span>
                <span className='releaseDate'>
                  <i className='fontawasomeIcons far fa-calendar-alt'></i>
                  {res.release_date.slice(0, 4)}
                </span>
                <button className='btn' onClick={() => props.openModal(res)}>
                  <span className='btnText'>OVERVIEW</span>
                </button>
              </div>
            </Card>
          ))}

        <PaginationDiv>
          <Pagination count={props.totalPageCount} page={props.currentPage} shape='rounded' onChange={props.paginationHandler} />
        </PaginationDiv>
      </Row>
    </StyledContainer>
  )
}

export default Movies
