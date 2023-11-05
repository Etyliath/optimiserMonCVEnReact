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
import { Profil } from './pages/Profil'
import { SingleProject } from './pages/SignleProject'
import { ScrollToTop } from './components/SrollToTop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Home /> <ScrollToTop />
          </>
        ),
      },
      {
        path: '/services',
        element: (
          <>
            <Services />
            <ScrollToTop />
          </>
        ),
      },
      {
        path: '/realizations',
        children: [
          {
            path: '',
            element: (
              <>
                <Realizations />
                <ScrollToTop />
              </>
            ),
          },
          {
            path: ':id',
            element: (
              <>
                <SingleProject />
                <ScrollToTop />
              </>
            ),
          },
        ],
      },
      {
        path: '/blog',
        children: [
          {
            path: '',
            element: (
              <>
                <Blog />
                <ScrollToTop />
              </>
            ),
          },
          {
            path: ':id',
            element: (
              <>
                <ScrollToTop />
                <SingleArticle />
              </>
            ),
          },
        ],
      },
      {
        path: '/contact',
        element: (
          <>
            <Contact />
            <ScrollToTop />
          </>
        ),
      },
      {
        path: '/legales',
        element: (
          <>
            <Legales />
            <ScrollToTop />
          </>
        ),
      },
      {
        path: '/profil',
        element: (
          <>
            <Profil />
            <ScrollToTop />
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
  return <RouterProvider router={router} />
}

export default App
