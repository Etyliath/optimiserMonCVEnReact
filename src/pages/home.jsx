/* eslint-disable react/no-unescaped-entities */
import { Skill } from '../components/Skill'

export function Home() {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      level: 90,
      color: 'bg-danger',
    },
    {
      id: 2,
      name: 'CSS3',
      level: 80,
      color: 'bg-info',
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
      level: 70,
      color: 'bg-warning',
    },
    {
      id: 4,
      name: 'PHP',
      level: 60,
      color: 'bg-success',
    },
    {
      id: 5,
      name: 'REACT',
      level: 50,
      color: 'bg-primary',
    },
  ]
  return (
    <>
      <main className='container-lg d-flex flex-column px-0' style={{background:'#F8F9FB'}}>
        <div
          className='container-lg'
          style={{
            background: 'url("/man-1839500_1280.jpg") no-repeat',
            height: '90vh',
            overflow: 'hidden',
            backgroundSize:'cover',
            backgroundColor: 'rgba(0,0,0,0.3)',
            backgroundBlendMode: 'soft-light',
          }}
        >
          <div className='d-flex flex-column flex-grow-1 align-items-center justify-content-center py-2 h-100'>
            <h1 className='text-white'>Bonjour,&nbsp;Je suis John DOE</h1>
            <h2 className='text-white'>Développer web full stack</h2>

            <a
              href='#apropos'
              className='btn btn-primary my-1'
            >
              En savoir plus
            </a>
          </div>
        </div>
        <section
          className='container-lg p-5'
          id='apropos'
          
        >
          <div className='container border shadow row gap-1 justify-content-between bg-white'>
            <div className='container col-lg-5 col-md-5 col-sm-6'>
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
            <div className='container col-lg-5 col-md-5 col-sm-6 py-5'>
              <div>
                <img
                  className='img-fluid img-thumbnail rounded'
                  src='/man-597178_640.jpg'
                  alt='homme a un bureau'
                />
              </div>
              <h2>Mes compétences</h2>
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
    </>
  )
}
