import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      <header className='container-lg'>
        <nav className='navbar navbar-expand-lg bg-primary bg-opacity-25' >
          <div className='container-fluid' >
            <NavLink
              className='navbar-brand'
              to='/'
            >
              John DOE
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse text-uppercase'
              id='navbarNav'
            >
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
                    to='/realizations'
                  >
                    Realisations
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='/blogs'
                  >
                    Blogs
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
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
