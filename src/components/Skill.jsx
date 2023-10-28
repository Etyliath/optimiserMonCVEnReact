import PropTypes from 'prop-types'

export function Skill({ skill, levelSkill }) {
  return (
    <>
      <label> {skill}</label>
      <div
        className='progress-stacked my-2'
      >
        <div
          className='progress'
          role='progressbar'
          aria-label='skill1'
          aria-valuenow={levelSkill}
          aria-valuemin='0'
          aria-valuemax='5'
          style={{ width: `${(levelSkill / 5) * 100}%` }}
        >
          <div className='progress-bar'>{levelSkill}</div>
        </div>
        <div
          className='progress opacity-25'
          role='progressbar'
          aria-label='skill2'
          aria-valuenow={5 - levelSkill}
          aria-valuemin='0'
          aria-valuemax='5'
          style={{ width: `${((5 - levelSkill) / 5) * 100}%` }}
        >
          <div className='progress-bar '></div>
        </div>
      </div>
    </>
  )
}
Skill.propTypes = {
  skill: PropTypes.string,
  levelSkill: PropTypes.number,
}
