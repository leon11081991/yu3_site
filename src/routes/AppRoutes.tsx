import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'

import Home from '@/views/Home'
const About = lazy(() => import('@/views/About'))
const Project = lazy(() => import('@/views/Project'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'project/:projectName',
        element: <Project />
      }
    ]
  }
])

const AppRoutes: React.FC = () => <RouterProvider router={router} />

export default AppRoutes
