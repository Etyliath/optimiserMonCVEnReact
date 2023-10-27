import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Legales } from './pages/Legales'
import { Realizations } from './pages/Realizations'
import { Blogs } from './pages/Blogs'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Header } from './components/Header'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <Header />
        <Services />
      </>
    ),
  },
  {
    path: '/realizations',
    element: (
      <>
        <Header />
        <Realizations />
      </>
    ),
  },
  {
    path: '/blogs',
    element: (
      <>
        <Header />
        <Blogs />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: '/legales',
    element: (
      <>
        <Header />
        <Legales />
      </>
    ),
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
