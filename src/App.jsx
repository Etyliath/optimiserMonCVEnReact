import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Legales } from './pages/Legales'
import { Realizations } from './pages/Realizations'
import { Blog } from './pages/Blog'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PageError } from './pages/PageError'
import { SingleArticle } from './pages/SingleArticle'
import {Profil} from './pages/Profil'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/realizations',
        element: <Realizations />,
      },
      {
        path: '/blog',
        children: [
          {
            path: '',
            element: <Blog />,
          },
          {
            path: ':id',
            element: <SingleArticle />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/legales',
        element: <Legales />,
      },
      {
        path: '/profil',
        element: <Profil />,
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
  return <RouterProvider router={router} />
}

export default App
