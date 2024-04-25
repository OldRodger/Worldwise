import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import City from './components/City'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import Form from './components/Form'
import CityProvider from './contexts/CityContext'
import AppLayout from './pages/AppLayout'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Root from './pages/Root'
import AuthProvider from './contexts/AuthContext'


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Root />,
          children: [
            { index: true, element: <Homepage /> },
            { path: "product", element: <Product /> },
            { path: "pricing", element: <Pricing /> },
            { path: "login", element: <Login /> },
            { path: "*", element: <PageNotFound /> },
          ]
        },
        {
          path: "app",
          element: <AppLayout />,
          children: [
            { index: true, element: <Navigate replace to="cities" /> },
            { path: "cities", element: <CityList /> },
            { path: "cities/:id", element: <City /> },
            { path: "countries", element: <CountryList /> },
            { path: "form", element: <Form /> },
          ]
        }
      ]
    }
  ])


  return (
    <AuthProvider>
      <CityProvider>
        <RouterProvider router={router} />
      </CityProvider>
    </AuthProvider>
  )
}

export default App