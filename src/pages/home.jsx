import { Profil } from '../components/Profil'
import { Skill } from '../components/Skill'
export function Home() {
  const skills = [
    {
      id: 1,
      name: 'Skill 1',
      level: 3,
    },
    {
      id: 2,
      name: 'Skill 2',
      level: 4,
    },
    {
      id: 3,
      name: 'Skill 3',
      level: 5,
    },
    {
      id: 4,
      name: 'Skill 4',
      level: 2,
    },
    {
      id: 5,
      name: 'Skill 5',
      level: 5,
    },
  ]
  return (
    <main className='container-lg'>
      <div className=' '>
        <div
          className='container-lg text-center image-background'
          style={{ height: '380px' }}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolore ad aliquid minus voluptatibus ab veritatis id dolores
              necessitatibus, sint, sed voluptate fugiat porro quis officia
              quaerat harum? Soluta, eos.
            </p>
            <img
              className=' rounded mx-auto d-block'
              src='/man-3414477_640.png'
              alt="dessin d'une personne"
            />
          </div>
          <Profil />
          <div
            className='container-sm mx-3 my-2'
            style={{ width: '60%' }}
          >
            {skills.map((skill) => (
              <Skill
                key={skill.id}
                skill={skill.name}
                levelSkill={skill.level}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
