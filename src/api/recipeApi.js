import { API_KEY } from './constants'

export default class RecipeApi {

  static getPopular = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`)
    const data = await response.json()
    return data
  }

  static getVeggie = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`)
    const data = await response.json()
    return data
  }

  static getCuisine = async name => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`)
    const data = await response.json()
    return data
  }

  static getSearched = async name => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`)
    const data = await response.json()
    return data
  }

  static getDetails = async id => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    const data = await response.json()
    return data
  }

} 