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
                1-Présentations du site
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus culpa libero est, nobis necessitatibus, voluptas alias
                earum accusantium pariatur perspiciatis sed! Adipisci,
                doloremque hic corporis tempore accusamus similique vero
                quisquam.
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
                2-Condifitions générales d'utilisation du site et des services
                proposés
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aperiam totam voluptate obcaecati sunt. Perspiciatis nisi eum
                itaque laudantium reiciendis mollitia dolorem quae vero,
                voluptates incidunt dolorum! Consequatur, aliquid provident!
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
                3-Descriptions des service fournis
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                aliquam vitae sunt quis voluptatum in! Nostrum, eveniet est
                ratione nesciunt perferendis, non quibusdam quod dolor itaque
                reiciendis, dolore laborum dolorem?
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                4-Limitations contractuelles sur les données techniques
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                Le site utilise la technologie JavaScript.<br/> Le site Internet ne
                pourra être tenu responsable de dommages matériels liés à
                l'utilisation du site. De plus, l'utilisateur du site s'engage à
                accéder au site en utilisant un matériel récent, ne contenant
                pas de virus et avec un navigateur de dernière génération
                mis-à-jour.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                5-Gestions des données personnelles
              </button>
            </h2>
            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                aliquam vitae sunt quis voluptatum in! Nostrum, eveniet est
                ratione nesciunt perferendis, non quibusdam quod dolor itaque
                reiciendis, dolore laborum dolorem?
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSix'
                aria-expanded='false'
                aria-controls='collapseSix'
              >
                6-Droits sur les images utilisées
              </button>
            </h2>
            <div
              id='collapseSix'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionMentionsLegales'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                aliquam vitae sunt quis voluptatum in! Nostrum, eveniet est
                ratione nesciunt perferendis, non quibusdam quod dolor itaque
                reiciendis, dolore laborum dolorem?
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
