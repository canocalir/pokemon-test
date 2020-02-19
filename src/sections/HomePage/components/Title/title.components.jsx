import React from 'react';
import style from './title.styles.scss';
import PropTypes from 'prop-types';

export default function Titles (props) {
  return (
    <div className={style.titlesMain}>
      <h4>{props.generationTitle}</h4>
      <h5>{props.pokemonCount}</h5>
    </div>
  )
}


Titles.propTypes = {
  generationTitle: PropTypes.string,
  pokemonCount: PropTypes.string
}