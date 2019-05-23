import React from 'react'
import { BarLoader, BeatLoader } from 'react-spinners'

import style from './Loader.scss'

const Loader = ({ bar, color, position }) => {
  const loaderColor = color || '#dc093b'
  const loaderClass = `${style.loader} ${position && style[position]}`
  const LoaderType = bar ? <BarLoader color={loaderColor} /> : <BeatLoader color={loaderColor} />

  return (
    <div className={loaderClass}>
      {LoaderType}
    </div>
  )
}

export default Loader
