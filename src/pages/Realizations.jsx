import { Project } from '../components/Project'
import datas from '../datas.json'

export function Realizations() {
  return (
    <main
      className='container-lg d-flex flex-column px-0'
      style={{ background: '#F8F9FB' }}
    >
      <div
        className='container-lg'
        style={{
          background: 'url("/background-2672565_1280-crop.jpg") no-repeat',
          height: '20vh',
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
      ></div>
      <div className='container-lg p-4'>
        <h1 className='text-center text-uppercase'>Portfolio</h1>
        <p className='text-center'>Voici quelques unes de mes réalisations.</p>
        <div
          className='mx-auto border-bottom border-4 border-primary'
          style={{ width: '25%' }}
        ></div>
        <div className='container-fluid row mt-5 mx-auto mb-2 justify-content-between'>
          {datas.projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              dev={project.dev}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
