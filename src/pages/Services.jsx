import { Service } from '../components/Service'


export function Services() {
  const services = [
    {
      id: 1,
      icon: 'desktop',
      name: 'UX Design',
      description:"L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une exprience de navigation optimale à l'internaute"
    },
    {
      id: 2,
      icon: 'file-code',
      name: 'Développement web',
      description:
        "Le <strong>dévemoppement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
    },
    {
      id: 3,
      icon: 'magnifying-glass-dollar',
      name: 'Référencement',
      description:
        "Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des technique en oeuvre pour améliorer sa position dans les resultats des moteurs de recherche.",
    },
  ]
  return (
    <main
      className='container-lg px-0'
      style={{ background: '#F8F9FB' }}
    >
      <div
        className='container-lg'
        style={{
          background: 'url("/background-2672565_1280-crop.jpg") no-repeat',
          height: '20vh',
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
      ></div>
      <div className='container-lg'>
        <div className='container-sm mx-auto py-3'>
          <h1 className='text-center text-uppercase'>Mon offre de services</h1>
          <p className='text-center mx-auto'>
            Voici les prestations sur lesquelles je peux intervenir
          </p>
          <div
            className='mx-auto border-bottom border-4 border-primary'
            style={{ width: '25%' }}
          ></div>
        </div>
        <div className='row align-items-stretch justify-content-around py-5 mx-auto'>
          {services.map((service) => (
            <Service
              key={service.id}
              icon={service.icon}
              nameService={service.name}
              description={service.description}
            />
          ))}
          
        </div>
      </div>
    </main>
  )
}
