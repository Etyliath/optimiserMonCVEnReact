import PropTypes from 'prop-types'

export function Project({ image, title, description, dev }) {
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='card h-100'>
        <img
          src={image}
          className='card-img-top'
          alt='...'
        />
        <div className='align-items-center d-flex flex-column'>
          <h5 className='text-center'>{title}</h5>
          <p className='text-center'>{description}</p>
          <button className='btn btn-outline-primary mb-3 mx-auto top-50'>Voir</button>
        </div>
        <div className='card-footer'>
          <small className='text-body-secondary'>{dev}</small>
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
