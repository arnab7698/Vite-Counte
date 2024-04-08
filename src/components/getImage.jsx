import React from 'react'

function getImage(pokeObj) {
  return (
    '../pokemons_images/pokemons/' + pokeObj.id + '.png'
  )
}

export default getImage