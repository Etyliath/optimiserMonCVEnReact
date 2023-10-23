import PropTypes from 'prop-types'

export function Blog({ title, image, info, publication }) {
  return (
    <article className='card col-lg-4 col-md-6' style={{ width: '20rem' }}>
      <img
          src={image}
          className='card-img-top rounded-start'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{info}</p>
          <p className='card-text'>
            <small className='text-body-secondary'>{publication}</small>
          </p>
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
