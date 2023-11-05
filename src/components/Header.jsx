import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      <header className='container-lg px-0'>
        <nav className='navbar navbar-expand-lg bg-dark px-2' data-bs-theme="dark">
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
                    to='/'
                  >
                    Accueil
                  </NavLink>
                </li>
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
                    Réalisations
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='/blog'
                  >
                    Blog
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    to='/contact'
                  >
                    Me Contacter
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
