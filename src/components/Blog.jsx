import PropTypes from 'prop-types'

export function Blog({ title, image, info, publication }) {
  return (
    <article
      className='card col-lg-4 col-md-6'
    >
      <h5 className='card-title'>{title}</h5>
      <div className=''>
          <img
            src={image}
            className='img-fluid rounded-start'
            alt='...'
          />
        </div>
        <div className=''>
          <div className='card-body p-2'>
            
            <p className='card-text'>{info}</p>
            <p className='card-text'>
              <small className='text-body-secondary'>{publication}</small>
            </p>
          </div>
        </div>
    </article>
  )
}
Blog.propTypes = {
  image: PropTypes.string,
  info: PropTypes.string,
  title: PropTypes.string,
  publication: PropTypes.string,
}
