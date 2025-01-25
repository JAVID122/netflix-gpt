import Login from './Login'

import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  { path: '/Browse', element: <Browse /> },
])

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
export default Body
