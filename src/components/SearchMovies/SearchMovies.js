import React, { useEffect, useState } from "react"
import Movies from "../Movies/Movies"
import Modal from "../UI/Modal/Modal"
import Spinner from "../UI/Spinner/Spinner"
import ErrorPage from "../UI/ErrorPage/ErrorPage"
import StayledErrorButton from "../UI/StyledUI/StayledErrorButton"
import StyledSearchMovies from "./StyledSearchMovies"
import axios from "axios"

const SearchMovies = props => {
  const [searchMovies, setSearchMovies] = useState(null)
  const [searchInput, setSearchInput] = useState("1")
  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [totalPageCount, setTotalPageCount] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const apiKey = "88ccf1279f26b61cf507f3cd3ea945b9"

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=${currentPage}&include_adult=false`)
      .then(response => {
        setTotalPageCount(response.data.total_pages)
        setSearchMovies(response.data.results.slice(0, 12))
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [currentPage, searchInput])

  const onChangeHandler = event => {
    setInputValue(event.target.value)
  }

  const onSubmitHandler = event => {
    event.stopPropagation()
    event.preventDefault()
    if (inputValue.length) {
      setSearchInput(inputValue)
    } else {
      alert("Please enter a valid input value...")
    }
  }

  const paginationHandler = (event, page) => {
    setCurrentPage(page)
  }

  let content = null
  if (loading === true)
    content = (
      <>
        <StyledSearchMovies onSubmit={event => onSubmitHandler(event)}>
          <input onChange={onChangeHandler} className='inputField' type='text' placeholder='Search movies' value={inputValue} />
          <button type='submit' className='inputButton'>
            <i className='inputIcon fas fa-search'></i>
          </button>
        </StyledSearchMovies>
        <Spinner />
      </>
    )
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
          <i className='fas fa-heart-broken fa-2x'> </i> BREAK
        </StayledErrorButton>
        <Modal showModal={props.showModal} closeModal={props.closeModal} modalContent={props.modalContent} />
        <StyledSearchMovies onSubmit={event => onSubmitHandler(event)}>
          <input onChange={onChangeHandler} className='inputField' type='text' placeholder='Search movies' value={inputValue} />
          <button type='submit' className='inputButton'>
            <i className='inputIcon fas fa-search'></i>
          </button>
        </StyledSearchMovies>
        <Movies
          showModal={props.showModal}
          totalPageCount={totalPageCount}
          currentPage={currentPage}
          paginationHandler={paginationHandler}
          movies={searchMovies}
          openModal={props.openModal}
          loading={loading}
        />
      </>
    )
  }

  return <>{content}</>
}

export default SearchMovies
