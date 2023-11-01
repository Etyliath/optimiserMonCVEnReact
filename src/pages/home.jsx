import { Skill } from '../components/Skill'

export function Home() {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      level: 90,
      color:'bg-danger'
    },
    {
      id: 2,
      name: 'CSS3',
      level: 80,
      color:'bg-info'
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
      level: 70,
      color:'bg-warning'
    },
    {
      id: 4,
      name: 'PHP',
      level: 60,
      color:'bg-success'
    },
    {
      id: 5,
      name: 'REACT',
      level: 50,
      color:'bg-primary'
    },
  ]
  return (
    <>
      <main className='container-lg d-flex flex-column'>
        <div
          className=' d-flex flex-column flex-grow-1 align-items-center justify-content-center image-background py-2'
        >
          <h1>Bonjour, Je suis John DOE</h1>
          <h2>Développer web full stack</h2>

          <a
            href='#apropos'
            className='btn btn-primary my-1'
          >
            En savoir plus
          </a>
        </div>
        <section
          className='container-lg mt-4'
          id='apropos'
        >
          <div className='container border shadow d-flex gap-1 justify-content-between bg-white'>
            <div className='container'>
              <h2 className='border-bottom border-3 border-primary p-2 my-5'>
                A propos
              </h2>
              <p className='mt-5'>
                Passionné par l'informatique et les nouvelles technologies. J'ai
                suivi une formation d'
                <strong>intégrateur développeur web</strong>
                au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                solides pour travailler dans le domaine du{' '}
                <strong>développement web</strong>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de{' '}
                <strong>développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière a la qualité du code que
                j'écris et que je respecte les bonnes pratiques du web
              </p>
            </div>
            <div className='container my-5'>
              <div>
                <img
                  className='img-fluid img-thumbnail rounded'
                  src='/man-597178_640.jpg'
                  alt='homme a un bureau'
                />
              </div>
              {skills.map((skill) => (
                <Skill
                  key={skill.id}
                  skill={skill.name}
                  levelSkill={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}
