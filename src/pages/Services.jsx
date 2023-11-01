import { Service } from '../components/Service'

export function Services() {
  
  return (
    <main className='container-lg'>
      <div className="container-lg img-fluid p-0">
        <img src="/background-2672565_1280-crop.jpg" alt="" className="img-fluid" />
      </div>
      <div className='container-sm mx-auto'>
        <h1 className='text-center text-uppercase'>Mon offre de services</h1>
        <p className='text-center mx-auto'>
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className='mx-auto border-bottom border-4 border-primary' style={{width:'25%'}}></div>
      </div>
      <div className=' row align-items-center justify-content-around gap-1 mt-5'>
       
          <Service
            icon={'desktop'}
            nameService={'UX Design'}
            description={"L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une exprience de navigation optimale à l'internaute"}
            
          />
         <Service
            icon={'file-code'}
            nameService={'Développement web'}
            description={"Le dévemoppement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP."}
            
          />
          <Service
            icon={'magnifying-glass-dollar'}
            nameService={'Référencement'}
            description={"Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des technique en oeuvre pour améliorer sa position dans les resultats des moteurs de recherche."}
            
          />
      </div>
    </main>
  )
}
