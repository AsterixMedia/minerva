import React from 'react'
import App from './app'

const DefaultLayout = ({children}) =>
  <App>
    <div>
      <h1>Minerva</h1>
      {children}
    </div>
  </App>

export default DefaultLayout
