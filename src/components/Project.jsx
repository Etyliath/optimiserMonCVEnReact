import PropTypes from 'prop-types'

export function Project({ image, title, description, dev }) {
  return (
    <div
      className='card'
      style={{ width: '18rem' }}
    >
      <img
        src={image}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className=''>{title}</h5>
        <p className=''>{description}</p>
        <p style={{ fontStyle: 'italic' }}>{dev}</p>
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
