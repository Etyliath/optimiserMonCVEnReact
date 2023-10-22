import PropTypes from 'prop-types'

export function Skill({ skill, levelSkill }) {
    return (
      <>
        <label> {skill}</label>
        <div
          className='progress my-2'
          role='progressbar'
          aria-label='skill'
          aria-valuenow={levelSkill}
          aria-valuemin='0'
          aria-valuemax='5'
          style={{ border:'solid 1px #000' }}
        >
          <div
            className='progress-bar'
            style={{ width: `${(levelSkill / 5) * 100}%` }}
          >{levelSkill}</div>
        </div>
      </>
    )
  }
  Skill.propTypes = {
    skill: PropTypes.string,
    levelSkill: PropTypes.number,
  }