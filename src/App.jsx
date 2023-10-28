import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Legales } from './pages/Legales'
import { Realizations } from './pages/Realizations'
import { Blogs } from './pages/Blogs'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer/>
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <Header />
        <Services />
        <Footer/>
      </>
    ),
  },
  {
    path: '/realizations',
    element: (
      <>
        <Header />
        <Realizations />
        <Footer/>
      </>
    ),
  },
  {
    path: '/blogs',
    element: (
      <>
        <Header />
        <Blogs />
        <Footer/>
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <Contact />
        <Footer/>
      </>
    ),
  },
  {
    path: '/legales',
    element: (
      <>
        <Header />
        <Legales />
        <Footer/>
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
