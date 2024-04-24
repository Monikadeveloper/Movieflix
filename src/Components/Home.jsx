import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'

const imageURL = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, arr = [] }) => {
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div>
          {arr.map((item, index) => (
            <Card key={index} img={`${imageURL}${item.poster_path}`} />
          ))}
        </div>
      </div>
    </>
  )
}

const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />
}

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [latest, setLatest] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=d70eb5843f097c7ed6bdc9966be47c40'
      )
      setPopularMovies(results)
      console.log(popularMovies)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=d70eb5843f097c7ed6bdc9966be47c40'
      )
      setTopRatedMovies(results)
      console.log(topRatedMovies)
    }
    fetchTopRated()
  }, [])
  useEffect(() => {
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=d70eb5843f097c7ed6bdc9966be47c40'
      )
      setTopRatedMovies(results)
      console.log(topRatedMovies)
    }
    fetchTopRated()
  }, [])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=d70eb5843f097c7ed6bdc9966be47c40'
      )
      setUpcoming(results)
      console.log(setUpcoming)
    }
    fetchUpcoming()
  }, [])
  useEffect(() => {
    const fetchLatest = async () => {
      const {
        data: { results },
      } = await axios.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=d70eb5843f097c7ed6bdc9966be47c40'
      )
      setLatest(results)
    }
    fetchLatest()
  }, [])
  return (
    <>
      <section className="home">
        <div className="banner">
          <img
            src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
            alt="coverpic"
          />
        </div>
        <Row title={'Popular on Movieflix'} arr={popularMovies} />
        <Row title={'Popular TV Shows'} arr={topRatedMovies} />
        <Row title={'Upcoming movies'} arr={upcoming} />
        <Row title={'Top Rated Movies'} arr={latest} />
      </section>
    </>
  )
}

export default Home
