import { useParams } from 'react-router-dom'
import datas from '../datas.json'

export function SingleProject(){
    const { id } = useParams()

    const project = datas.projects.find((obj) => {
      return obj.id === parseInt(id)
    })
    return (
      <div
        className='container-lg cantainer px-0'
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
        <div className='py-5'>
          <h1 className='text-center pb-5'>{project.title} </h1>
          <div
            className='card mb-3 mx-4'
            // style={{maxWidth: '540px'}}
          >
            <div className='row g-0'>
              <div className='col-md-4'>
                <img
                  src={project.image}
                  className='img-fluid rounded-start'
                  alt='...'
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <p className='card-text'>{project.description}</p>
                  <p className='card-text'>
                    <small className='text-body-secondary'>
                      {project.dev}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}