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
      <main className='container-lg'>
        <h1>Mentions légales</h1>
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
                John DOE
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
               Always Data
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
                Ceédits
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                <p>Site développé par John Doe, étudiants au CEF.</p>
                <p>Les images libres de droit sont issues du site <a className='text-decoration-none text-primary' href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a> </p>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
