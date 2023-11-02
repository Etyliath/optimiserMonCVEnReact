import PropTypes from 'prop-types'

export function Blog({ title, image, publication, broadcast }) {
  return (
    <article
      className='col-lg-4 col-md-6 mb-4'
    >
     <div className='card h-100'>
        <img
          src={image}
          className='card-img-top'
          alt='...'
        />
        <div className='align-items-center p-2'>
          <h5 className=''>{title}</h5>
          <p className=''>{publication}</p>
          <button className='btn btn-primary mb-3'>Lire la suite</button>
        </div>
        <div className='card-footer'>
          <small className='text-body-secondary'>{broadcast}</small>
        </div>
      </div>
    </article>
  )
}
Blog.propTypes = {
  image: PropTypes.string,
  broadcast: PropTypes.string,
  title: PropTypes.string,
  publication: PropTypes.string,
}
