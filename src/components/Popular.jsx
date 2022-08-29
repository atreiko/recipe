import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeApi from '../api/recipeApi'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem('popular')

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      (async () => {
        const { recipes } = await RecipeApi .getPopular()
        localStorage.setItem('popular', JSON.stringify(recipes))
        setPopular(recipes)
      })()
    }
  }

  const options = {
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: 'free',
    gap: '5rem'
  }

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={options}>
          {popular && (
            popular.map(({ id, title, image }) => (
              <SplideSlide key={id}>
                <Card>
                  <Link to={`/recipe/${id}`}>
                    <p>{title}</p>
                    <img src={image} alt={title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )))
          }
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  height: 15rem;
  border-radius: 2rem;
  overflow: hidden; 
  position: relative;

  img {
    border-radius: 2rem;
    object-fit: cover;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: .8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
  }
`

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  z-index: 3;
`

export default Popular