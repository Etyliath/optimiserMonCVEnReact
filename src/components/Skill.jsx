import PropTypes from 'prop-types'

export function Skill({ skill, levelSkill }) {
    return (
      <>
        <label> {skill}</label>
        <div
          className='progress my-2'
          role='progressbar'
          aria-label='Basic example'
          aria-valuenow={levelSkill}
          aria-valuemin='0'
          aria-valuemax='5'
          style={{ background: '#d2d2d2' }}
        >
          <div
            className='progress-bar  text-dark'
            style={{ width: `${(levelSkill / 5) * 100}%` }}
          ></div>
        </div>
      </>
    )
  }
  Skill.propTypes = {
    skill: PropTypes.string,
    levelSkill: PropTypes.number,
  }