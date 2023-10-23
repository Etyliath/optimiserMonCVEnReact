import { Projects } from '../components/Projects'

export function Realizations() {
  const projects = [
    {
      title: 'projet 1',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      title: 'projet 2',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      title: 'projet 3',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      title: 'projet 4',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      title: 'projet 5',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
  ]
  return (
    <>
      <h1 className='text-center'>Portfolio</h1>
      <div className='container-fluid row justify-content-center gap-2'>
        {projects.map((project) => (
          <Projects
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            dev={project.dev}
          />
        ))}
      </div>
    </>
  )
}
