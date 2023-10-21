import { Skill } from "../components/Skill"
export function Home() {
  const skills = [
    {
      name: 'compétence 1',
      level: 3,
    },
    {
      name: 'compétence 2',
      level: 4,
    },
    {
      name: 'compétence 3',
      level: 5,
    },
    {
      name: 'compétence 4',
      level: 2,
    },
    {
      name: 'compétence 5',
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
        <div className='container'>
          <h2 className='text-center'>A Propos</h2>
          <h3 className="">John DOE</h3>
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

        <div className='container-sm'>
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


