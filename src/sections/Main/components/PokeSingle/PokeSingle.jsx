import React from 'react'
import { urlCorrector, upperCaseFirstChar } from '@shared/utils'

import style from './PokeSingle.scss'

export default function PokeSingle (props) {
  const {pokemon} = props
  const avatar = `http://pokestadium.com/sprites/xy/${urlCorrector(pokemon.name)}.gif`

  return (
    <div className={style.flexcontainer}>
      <div className={style.pokelist}>
        <a href={`pokemon/${pokemon.name}`}>
          <div className={style.singlecard}>
            <div className={style.pokemonimage}>
            <img src={avatar} />
            </div>
            <div className={style.pokename}>
              <p>{upperCaseFirstChar(pokemon.name)}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
