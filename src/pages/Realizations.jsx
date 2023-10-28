import { Project } from '../components/Project'

export function Realizations() {
  const projects = [
    {
      id:1,
      title: 'projet 1',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      id:2,
      title: 'projet 2',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      id:3,
      title: 'projet 3',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      id:4,
      title: 'projet 4',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
    {
      id:5,
      title: 'projet 5',
      image: '/technology-1283624_640.jpg',
      description: 'site vitrine pour le client les pull de noël',
      dev: 'developpement web',
    },
  ]
  return (
    <main className='container-lg'>
      <h1 className='text-center'>Portfolio</h1>
      <div className='container-fluid row mx-auto mb-2 justify-content-between'>
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
