/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import { useState } from 'react'

export function Contact() {
  const [alert, setAlert] = useState({
    enable: false,
    type: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data)
    const name = data.get('name').toString().trim()
    const email = data.get('email').toString().trim()
    const telephone = data.get('telephone').toString().trim()
    const sujet = data.get('sujet').toString().trim()
    const message = data.get('message').toString().trim()
    if (
      name === '' ||
      email === '' ||
      telephone === '' ||
      sujet === '' ||
      message === ''
    ) {
      setAlert({
        enable: true,
        type: 'danger',
        message: 'vous dever remplir tous les champs',
      })
      setTimeout(() => {
        setAlert({ enable: false })
      }, 3000)
    } else {
      setAlert({
        enable: true,
        type: 'success',
        message: 'votre message est envoyé',
      })
      setTimeout(() => {
        setAlert({ enable: false })
      }, 3000)
      e.target.reset()
    }
  }

  return (
    <main className='container-lg px-0'>
      <div
        className='container-lgpb-5 p-4'
        style={{
          background: 'url("/hands-2178566_1280.jpg") no-repeat',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,105,255,0.5)',
          backgroundBlendMode: 'soft-light',
        }}
      >
        <div className='container bg-white my-3'>
          <div className='container-sm mx-auto py-5'>
            <h1 className='text-center text-uppercase'>Me contacter</h1>
            <p className='text-center mx-auto'>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div
              className='mx-auto border-bottom border-4 border-primary'
              style={{ width: '25%' }}
            ></div>
          </div>
          <div className='row px-2'>
            <div className='col-md-6'>
              <h2 className='border-bottom border-2 border-primary pe-2 pb-2'>
                Formulaire de contact
              </h2>
              {alert.enable && (
                <Alert
                  type={alert.type}
                  message={alert.message}
                />
              )}
              <form
                className='d-flex flex-column'
                onSubmit={handleSubmit}
              >
                <div className='mb-3 d-flex flex-column align-items-center'>
                  <input
                    type='text'
                    className='form-control my-2'
                    name='name'
                    id='name'
                    placeholder='Votre nom'
                  />
                  <input
                    type='email'
                    className='form-control my-2'
                    name='email'
                    id='email'
                    aria-describedby='emailHelp'
                    placeholder='Votre adresse email'
                  />
                  <input
                    type='tel'
                    className='form-control my-2'
                    name='telephone'
                    id='telephone'
                    placeholder='Votre numéro de téléphone'
                  />
                  <input
                    type='text'
                    className='form-control my-2'
                    name='sujet'
                    id='sujet'
                    placeholder='Sujet'
                  />
                  <textarea
                    className='form-control my-2'
                    name='message'
                    id='message'
                    cols='30'
                    rows='5'
                    placeholder='Votre message'
                  />
                  <button
                    className='btn btn-primary my-3'
                    type='submit'
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
            <div className='col-md-6'>
              <h2 className='border-bottom border-2 border-primary pe-2 pb-2'>
                Mes coordonnées
              </h2>
              <address className='d-flex flex-column text-left'>
                <p className='m-0'>
                  <i className='fa-solid fa-location-dot p-1'></i>40 Rue Laure
                  Diebold, 69009 Lyon, France
                </p>
                <a
                  href='tel:+33620304050'
                  className='text-decoration-none mb-2'
                  style={{ color: 'var(--main-text-color)' }}
                >
                  <i className='fa-solid fa-mobile p-1'></i> +33620304050
                </a>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524682!2d4.7963986117034505!3d45.778661970960165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1698876466515!5m2!1sfr!2sfr'
                    // width='400'
                    height='300px'
                    style={{ border: '0' }}
                    allowfullscreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>

              </address>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/**
 * affiche une alert bootstrap
 * @param {string} type
 * @param {string} message
 * @returns
 */
function Alert({ type, message }) {
  return (
    <div
      className={`alert alert-${type}`}
      role='alert'
    >
      {message}
    </div>
  )
}
Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
}
