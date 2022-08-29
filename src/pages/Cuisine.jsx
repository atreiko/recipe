import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Recipe from '../api/recipeApi'

import styled from 'styled-components' 

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  const { type } = useParams()

  useEffect(() => {
    getCuisine()
  }, [type])

  const getCuisine = async () => {
    const { results } = await Recipe.getCuisine(type)
    setCuisine(results)
  }

  return ( 
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cuisine.map(({ id, image, title }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none; 
  }
  h4 {
    padding: 1rem;
    text-align: center;
  }
`

export default Cuisine