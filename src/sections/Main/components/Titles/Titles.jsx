import React from 'react'
import style from './Titles.scss'

export default function Titles (props) {
  return (
    <div className={style.titlesMain}>
      <h4>{props.generationTitle}</h4>
      <h5>{props.pokemonCount}</h5>
    </div>
  )
}
