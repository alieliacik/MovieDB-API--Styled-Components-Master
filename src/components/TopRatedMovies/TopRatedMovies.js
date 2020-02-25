import React, { useEffect, useState } from "react"
import Movies from "../Movies/Movies"
import Modal from "../UI/Modal/Modal"
import Spinner from "../UI/Spinner/Spinner"
import ErrorPage from "../UI/ErrorPage/ErrorPage"

import axios from "axios"
import StayledErrorButton from "../UI/StyledUI/StayledErrorButton"

const TopRatedMovies = props => {
  const [topRatedMovies, setTopRatedMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [totalPageCount, setTotalPageCount] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const apiKey = "88ccf1279f26b61cf507f3cd3ea945b9"

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`)
      .then(response => {
        setTotalPageCount(response.data.total_pages)
        setTopRatedMovies(response.data.results.slice(0, 12))
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [currentPage])

  const paginationHandler = (event, page) => {
    setCurrentPage(page)
  }

  let content = null
  if (loading === true) content = <Spinner />
  if (error === true)
    content = (
      <>
        <StayledErrorButton error={error} onClick={() => setError(!error)}>
          <i className='fas fa-heart fa-2x'> </i>REPAIR
        </StayledErrorButton>
        <ErrorPage />
      </>
    )
  if (loading === false && error === false) {
    content = (
      <>
        <StayledErrorButton error={error} onClick={() => setError(true)}>
          <i className='fas fa-heart-broken fa-2x'> </i> BRAKE
        </StayledErrorButton>
        <Modal showModal={props.showModal} closeModal={props.closeModal} modalContent={props.modalContent} />
        <Movies
          showModal={props.showModal}
          totalPageCount={totalPageCount}
          currentPage={currentPage}
          paginationHandler={paginationHandler}
          movies={topRatedMovies}
          openModal={props.openModal}
          loading={loading}
        />
      </>
    )
  }

  return <>{content}</>
}

export default TopRatedMovies
