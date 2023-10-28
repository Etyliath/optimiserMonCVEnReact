import PropTypes from 'prop-types'

export function Project({ image, title, description, dev }) {
  return (
    <div className='card col-lg-4 col-md-6'>
      <div className='row g-0'>
        <div className='col-md-4 my-auto'>
          <img
            src={image}
            className='img-fluid rounded-start'
            alt='...'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className=''>{title}</h5>
            <p className=''>{description}</p>
            <p style={{ fontStyle: 'italic' }}>{dev}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
Project.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  dev: PropTypes.string,
}
