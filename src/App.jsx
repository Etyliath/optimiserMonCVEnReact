import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Legales } from './pages/Legales'
import { Realizations } from './pages/Realizations'
import { Blogs } from './pages/Blogs'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PageError } from './pages/PageError'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Root />
      </>
    ),
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: '/services',
        element: (
          <>
            <Services />
          </>
        ),
      },
      {
        path: '/realizations',
        element: (
          <>
            <Realizations />
          </>
        ),
      },
      {
        path: '/blogs',
        element: (
          <>
            <Blogs />
          </>
        ),
      },
      {
        path: '/contact',
        element: (
          <>
            <Contact />
          </>
        ),
      },
      {
        path: '/legales',
        element: (
          <>
            <Legales />
          </>
        ),
      },
    ],
  },
])
function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
