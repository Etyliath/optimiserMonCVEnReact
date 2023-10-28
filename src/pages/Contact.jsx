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
    const message = data.get('message').toString().trim()
    console.log(name, email, telephone, message)
    if (name === '' || email === '' || telephone === '' || message === '') {
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
    }
  }

  return (
    <main className='container-lg'>
      <div
        className='container-lg'
        style={{
          backgroundImage: 'url("/hands-2178566_1280.jpg")',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,105,255,0.5)',
          backgroundBlendMode: 'soft-light',
        }}
      >
        <h1>Contactez-moi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          reiciendis culpa odit velit rerum minima, incidunt id dignissimos
          numquam! Quisquam odio excepturi error, repellat perferendis placeat.
          Nihil quia illum temporibus?
        </p>
        <div className='row'>
          <div className='col-md-5'>
            <h2 className='text-center'>Ma carte de visite</h2>
            <address className='d-flex flex-column text-left'>
              <a
                href='mailto:john.doe@mail.com'
                className='text-decoration-none'
                style={{ color: 'var(--main-text-color)' }}
              >
                <i className='fa-solid fa-envelope'></i> john.doe@mail.com
              </a>
              <a
                href='tel:+33606060606'
                className='text-decoration-none'
                style={{ color: 'var(--main-text-color)' }}
              >
                <i className='fa-solid fa-phone'></i> +33606060606
              </a>
              <p>
                <i className='bi bi-mailbox-flag'></i> 155 All. du Phare, 17590
                Saint-Clément-des-Baleines
              </p>
              <iframe
                className='text-center'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13510.332115548343!2d-1.5698937269529876!3d46.24341715538101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48040b01e5f16e7f%3A0xb4c89eec66046d9e!2sPhare%20des%20Baleines!5e0!3m2!1sfr!2sfr!4v1697571313232!5m2!1sfr!2sfr'
                width='300'
                height='350'
                style={{ border: '0' }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </address>
          </div>
          <div className='col-md-6'>
            <h2>Nous écrire</h2>
            {alert.enable && (
              <Alert
                type={alert.type}
                message={alert.message}
              />
            )}
            <form className='d-flex flex-column' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label
                  htmlFor='name'
                  className='form-label'
                >
                  Nom
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                />
                <label
                  htmlFor='email'
                  className='form-label'
                >
                  Adresse mail
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='email'
                  aria-describedby='emailHelp'
                />
                <label
                  htmlFor='telephone'
                  className='form-label'
                >
                  Téléphone
                </label>
                <input
                  type='tel'
                  className='form-control'
                  name='telephone'
                  id='telephone'
                />
                <label
                  htmlFor='message'
                  className='form-label'
                >
                  Message
                </label>
                <textarea
                  className='form-control'
                  name='message'
                  id='message'
                  cols='30'
                  rows='5'
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
