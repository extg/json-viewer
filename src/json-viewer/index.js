

import React from 'react'
import ReactDOM from 'react-dom'

import {Json} from './components'

const renderJson = (dataObject, el = document.getElementById('root')) => {
  console.log(dataObject)
  window.__DO__ = dataObject
  ReactDOM.render(
    <Json dataObject={dataObject} />,
    el
  )
}

export default renderJson
