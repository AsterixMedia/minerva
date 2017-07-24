import React from 'react'
import Head from 'next/head'

import App from './app'

const DefaultLayout = ({children, title}) =>
  <App>
    <div>
      <Head>
        <title>
          {title ? `${title} - Minerva` : 'Minerva'}
        </title>
      </Head>
      <h1>Minerva</h1>
      {children}
    </div>
  </App>

export default DefaultLayout
