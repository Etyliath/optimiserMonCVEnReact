import PropTypes from 'prop-types'

export function Service({ nameService, description, icon }) {
  const classIcon = `fa-solid fa-${icon} fa-2xl test icon-service mt-4`
  return (
    <article className='border shadow rounded col-md-3 col-lg-3 bg-white p-1'>
      <div className='icon-service text-center h-100'>
        <i className={classIcon}></i>
        <h4 className='text-center text-uppercase mt-2'>{nameService}</h4>
        <p className='text-center mt-3'>{description}</p>
      </div>
    </article>
  )
}

Service.propTypes = {
  nameService: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
}
