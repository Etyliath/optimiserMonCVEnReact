import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import datas from '../datas.json'

export function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY !== 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  },[])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className='container-lg px-0 mt-auto'>
        <div className='pt-2'>
          <div className='container-lg row align-items-start mx-auto'>
            <div className='col-lg-3 col-md-6 py-4'>
              <div className='d-flex flex-column text-left m-0'>
                <h6 className='mb-1'>John DOE</h6>
                <p className='m-0'>
                  40 Rue Laure Diebold
                  <br />
                  69009 Lyon, France
                  <br />
                  Téléphone: 06 20 30 40
                </p>
              </div>
              <div className='d-flex mt-3'>
                <a
                  className='mx-1 text-dark pe-2'
                  href='https://github.com/github-john-doe'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <i className='fa-brands fa-github fa-lg '></i>
                </a>
                <a
                  className='mx-1 text-dark pe-2'
                  href='https://twitter.com/johndoe_game?lang=fr'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <i className='fa-brands fa-x-twitter fa-lg'></i>
                </a>
                <a
                  className='mx-1 text-dark pe-2'
                  href='https://uk.linkedin.com/company/john-doe'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in fa-lg'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 py-4'>
            <h6 className='mb-1'>Les liens utiles</h6>
            <NavLink
                className='nav-link'
                to='/'
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                Accueil
              </NavLink>
              <NavLink
                className='nav-link'
                to='/#apropos'
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                A propos
              </NavLink>
              <NavLink
                className='nav-link'
                to='/services'
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                Services
              </NavLink>
              <NavLink
                className='nav-link'
                to='/contact'
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                Me contacter
              </NavLink>
              <NavLink
                className='nav-link'
                to='/legales'
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                Mentions légales
              </NavLink>
              <NavLink
                className='nav-link'
                to='/profil'
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                Profil GitHub
              </NavLink>
            </div>
            <div className='col-lg-3 col-md-6 py-4'>
            <h6 className='mb-1'>Mes dernières réalisations</h6>
            <NavLink
                className='nav-link'
                to={`/realizations/${datas.projects.length}`}
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                {datas.projects[datas.projects.length-1].title}
              </NavLink>
              <NavLink
                className='nav-link'
                to={`/realizations/${datas.projects.length-1}`}
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                {datas.projects[datas.projects.length-2].title}
              </NavLink>
              <NavLink
                className='nav-link'
                to={`/realizations/${datas.projects.length-2}`}
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                {datas.projects[datas.projects.length-3].title}
              </NavLink>
            </div>
            <div className='col-lg-3 col-md-6 py-4'>
            <h6 className='mb-1'>Mes derniers articles</h6>
            <NavLink
                className='nav-link'
                to={`/blog/${datas.articles.length}`}
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                {datas.articles[datas.articles.length-1].title}
              </NavLink>
              <NavLink
                className='nav-link'
                to={`/blog/${datas.articles.length-1}`}
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                {datas.articles[datas.articles.length-2].title}
              </NavLink>
              <NavLink
                className='nav-link'
                to={`/blog/${datas.articles.length-2}`}
              >
                <i className='fa-solid fa-greater-than fa-xs p-1 text-primary'></i>
                {datas.articles[datas.articles.length-3].title}
              </NavLink>
            </div>
          </div>
          <div className='container-fluid mt-1 px-0'>
            <p
              className='text-center mt-1 py-2 bg-dark text-white'
              data-bs-theme='dark'
            >
              <i className="fa-regular fa-copyright pe-1"></i>2023 designed by John Doe
            </p>
            {visible && (
              <button
                className='btn btn-outline-primary bouton-up'
                onClick={scrollToTop}
                style={{ position: 'fixed', bottom: '40px', right: '9%' }}
              >
                <i className='fa-regular fa-square-caret-up mx-1'></i>En haut
              </button>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
