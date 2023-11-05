import { Helmet } from 'react-helmet'
export function Legales() {
  return (
    <>
      <Helmet>
        <meta
          name='robots'
          content='noindex'
        />
      </Helmet>
      <main
        className='container-lg d-flex flex-column px-0'
        style={{ height: '100%', background: '#F8F9FB' }}
      >
        <div className='container-sm mx-auto py-5'>
          <h1 className='text-center text-uppercase'>Mentions légales</h1>
          <div
            className='mx-auto border-bottom border-4 border-primary'
            style={{ width: '25%' }}
          ></div>
        </div>{' '}
        <div
          className='accordion mb-2'
          id='accordionMentionsLegales'
        >
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Editeur du site
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                <h2>John DOE</h2>
                <p className='m-0'>
                  <i className='fa-solid fa-location-dot p-1'></i>40 Rue Laure
                  Diebold
                  <br />
                  69009 Lyon, France
                </p>
                <a
                  href='tel:+33620304050'
                  className='text-decoration-none mb-2'
                >
                  <i className='fa-solid fa-mobile p-1'></i> +33620304050
                </a>
                <br />
                <a
                  href='mailto:john.doe@gmail.com'
                  className='text-decoration-none mb-2'
                >
                  <i className='fa-solid fa-envelope p-1'></i>john.doe@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Hébergeur
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                <h2>Always Data</h2>
                <p className='m-0'>
                  91 Rue du Faubours Saint-Honoré
                  <br />
                  75008 Paris, France
                </p>
                <a
                  className='text-decoration-none mb-2'
                  href='http://www.alwaysdata.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-solid fa-globe'></i>www.alwaysdata.com
                </a>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Crédits
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                <p>Site développé par John Doe, étudiants au CEF.</p>
                <p>
                  Les images libres de droit sont issues du site{' '}
                  <a
                    className='text-decoration-none text-primary'
                    href='https://pixabay.com/fr/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Pixabay
                  </a>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
