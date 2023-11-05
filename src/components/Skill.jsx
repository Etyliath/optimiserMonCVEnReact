import PropTypes from 'prop-types'

export function Skill({ skill, levelSkill, color }) {
  return (
    <>
      <h6 className='mb-1 mt-3'> {skill} {levelSkill}%</h6>
      <div
        className='progress'
        role='progressbar'
        aria-label='Success example'
        aria-valuenow={levelSkill}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <div
          className={`progress-bar ${color}`}
          style={{ width: `${levelSkill}%` }}
        ></div>
      </div>
    </>
  )
}
Skill.propTypes = {
  skill: PropTypes.string,
  levelSkill: PropTypes.number,
  color: PropTypes.string
}
