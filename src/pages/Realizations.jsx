import { Project } from '../components/Project'

export function Realizations() {
  const projects = [
    {
      id: 1,
      title: 'Fresh food',
      image: '/vegetables-790022_640.jpg',
      description: "Réalisation d'un site avec commande en ligne.",
      dev: 'Site réalisé avec PHP et MySQL',
    },
    {
      id: 2,
      title: 'Restaurant Akira',
      image: '/sushi-354628_640.jpg',
      description: "Réalisation d'un site vitrine.",
      dev: 'Site réalisé avec WordPress',
    },
    {
      id: 3,
      title: 'Espace bien-être',
      image: '/hand-3751159_640.jpg',
      description: "Réalisation d'un site vitrine pour un praticien du bien-être",
      dev: 'Site réalisé en HTML/CSS',
    },
  ]
  return (
    <main className='container-lg'>
      <div className='container-lg img-fluid p-0'>
        <img
          src='/background-2672565_1280-crop.jpg'
          alt=''
          className='img-fluid mb-5'
        />
      </div>

      <h1 className='text-center text-uppercase'>Portfolio</h1>
      <p className='text-center'>Voici quelques unes de mes réalisations.</p>
      <div
        className='mx-auto border-bottom border-4 border-primary'
        style={{ width: '25%' }}
      ></div>
      <div className='container-fluid row mt-5 mx-auto mb-2 justify-content-between'>
        {projects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            dev={project.dev}
          />
        ))}
      </div>
    </main>
  )
}
