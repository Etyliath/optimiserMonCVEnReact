/* eslint-disable react/no-unescaped-entities */
import { useRouteError, NavLink } from 'react-router-dom'

export function PageError() {
  const error = useRouteError()
  return (
    <>
      <div className='container d-flex flex-column align-items-center my-auto'>
        <h1 className='text-center'>Page error 404</h1>
        <p> {error?.error?.toString() ?? error?.toString}</p>
        <NavLink
          className='btn btn-primary'
          href='/'
        >
          Retour à l'accueil
        </NavLink>
      </div>
    </>
  )
}
