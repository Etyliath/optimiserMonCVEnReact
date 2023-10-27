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
      <footer className='container-lg mt-2 bg-primary bg-opacity-50'>
        <div className='container-lg row align-items-center justify-content-center'>
          <div className='col-3'>
            <address className='d-flex flex-column text-left'>
              <p>John DOE</p>
              <p>
                <i className='fa-solid fa-phone'></i> +33606060606
              </p>
              <p>
                <i className='bi bi-mailbox-flag'></i> 155 All. du Phare, 17590
                Saint-Clément-des-Baleines
              </p>
            </address>
          </div>
          <div className='col-3'>
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
          <div className='col-3'>
            <nav>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='/realizations'
                  >
                    Realisations
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-3'>
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
        <div className='container-fluid'>
          <p className='text-center'>(c) Copyright 2023 John DOE</p>
          {visible && (
            <button
              className='btn btn-outline-primary bouton-up'
              onClick={scrollToTop}
              style={{ position: 'fixed', bottom: '20px', right: '6%' }}
            >
              <i className="fa-regular fa-square-caret-up mx-1"></i>En haut
            </button>
          )}
        </div>
      </footer>
    </>
  )
}
