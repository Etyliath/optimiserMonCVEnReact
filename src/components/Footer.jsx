import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className='container-lg mt-auto'>
        <div className='pt-2'>
          <div className='container-lg row align-items-center mx-auto'>
            <div className='col-lg-3 col-md-6'>
              <address className='d-flex flex-column text-left m-0'>
                <p className='mb-1'>John DOE</p>
                <p>
                  <i className='fa-solid fa-phone'></i> +33606060606
                </p>
                <p className='mb-1'>
                  <i className='bi bi-mailbox-flag'></i> 155 All. du Phare,
                  17590 Saint-Clément-des-Baleines
                </p>
              </address>
              <div className='d-flex'>
                {' '}
                <a
                  className='mx-1 text-dark'
                  href='https://github.com/github-john-doe'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <i className='fa-brands fa-github fa-lg '></i>
                </a>
                <a
                  className='mx-1 text-dark'
                  href='https://twitter.com/johndoe_game?lang=fr'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <i className='fa-brands fa-x-twitter fa-lg'></i>
                </a>
                <a
                  className='mx-1 text-dark'
                  href='https://uk.linkedin.com/company/john-doe'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in fa-lg'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <nav>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to='/services'
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to='/contact'
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to='/legales'
                    >
                      Mentions Légales
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-lg-3 col-md-6'>
              <nav>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to='/realizations'
                    >
                      Réalisations
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-lg-3 col-md-6'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='/blogs'
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='container-fluid mt-1' >
            <p className='text-center mt-1 pb-1 bg-dark text-white'data-bs-theme="dark">(c) Copyright 2023 John DOE</p>
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
