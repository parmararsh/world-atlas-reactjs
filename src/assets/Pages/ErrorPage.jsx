import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>error</h1>
      {error && <p>{error.data}</p>}
    </div>
  )
}

export default ErrorPage
