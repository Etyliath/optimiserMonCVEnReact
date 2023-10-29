import PropTypes from 'prop-types'

export function Service({nameService,description,icon}) {
    const classIcon=`fa-solid fa-${icon} fa-2xl icon-service col-1 justify-content-center`
  return (
    <article className='icon-service col-md-6 col-lg-6'>
      <h2 className='text-center'>{nameService}</h2>
      <div className='row align-items-center mx-1'>
        <p className='col-9'>{description}</p>
        <i className = {classIcon} ></i>
      </div>
    </article>
  )
}

Service.propTypes={
    nameService: PropTypes.string,
    description: PropTypes.string,
    icon:PropTypes.string
}