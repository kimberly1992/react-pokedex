import React from 'react'
import axios from 'axios'
export default function Pokecard({id}) {
  const [pokemon, setPokemon] = React.useState({
    name: "",
    type: [],
    image: ""
    })
    
  React.useEffect(()=>{
  const fetchPokemon = async()=>{
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   
   setPokemon({
    name: response.data.name,
    type: response.data.types,
    image: response.data.sprites.other.dream_world.front_default
    })
  }
  fetchPokemon();
  },[id])
  return (
    <div className="card">
    <img src={pokemon.image} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{pokemon.name}</h5>
  
  </div>
</div>
  )
}
