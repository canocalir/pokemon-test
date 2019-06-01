import React from 'react'
import style from './Images.scss'
import ImmflyImg from '@assets/images/immfly.png'
import PokemonImg from '@assets/images/pokemon.png'

const Images = () => (
  <div className={style.logoimage}>
    <img src={ImmflyImg} />
    <img src={PokemonImg} />

  </div>
)

export default Images
