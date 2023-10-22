import { Skill } from "../components/Skill"
export function Home() {
  const skills = [
    {
      name: 'Skill 1',
      level: 3,
    },
    {
      name: 'Skill 2',
      level: 4,
    },
    {
      name: 'Skill 3',
      level: 5,
    },
    {
      name: 'Skill 4',
      level: 2,
    },
    {
      name: 'Skill 5',
      level: 5,
    },
  ]
  return (
    <>
      <div
        className='container-fluid text-center'
        style={{
          backgroundImage: 'url("/dev-in-action.jpg")',
          height: '640px',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.3)',
          backgroundBlendMode: 'soft-light',
        }}
      >
        <h1>Joe DOE</h1>
        <h2>Developper full stack junior</h2>

        <a
          href='#apropos'
          className='btn btn-primary'
        >
          En savoir plus
        </a>
      </div>
      <section
        className=''
        id='apropos'
      >
        <div className='container mx-3 my-2'>
          <h2 className='text-center'>A Propos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore
            ad aliquid minus voluptatibus ab veritatis id dolores
            necessitatibus, sint, sed voluptate fugiat porro quis officia
            quaerat harum? Soluta, eos.
          </p>
          <img
            className=' rounded mx-auto d-block'
            src='/avatar.jpg'
            alt="dessin d'une personne"
          />
        </div>

        <div className='container-sm mx-3 my-2'style={{width:'60%'}}>
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              skill={skill.name}
              levelSkill={skill.level}
            />
          ))}
        </div>
      </section>
    </>
  )
}


