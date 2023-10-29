import { Service } from '../components/Service'

export function Services() {
  const services = [
    {
      id:1,
      name: 'creation de site web',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'globe',
    },
    {
      id:2,
      name: 'Intégrations',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'cloud',
    },
    {
      id:3,
      name: 'Site responsive',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'mobile',
    },
    {
      id:4,
      name: 'Developement spécifique',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'code',
    },
    {
      id:5,
      name: 'Design & Maquette',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'palette',
    },
    {
      id:6,
      name: 'Administration',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'laptop-code',
    },
  ]

  return (
    <main className='container-lg mt-2'>
      <div className='container-fluid mx-2'>
        <h1 className='text-start'>Mes Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem
          dolores adipisci blanditiis, qui doloribus ad dolore a aliquid
          doloremque ea similique incidunt, molestiae temporibus officia
          aspernatur! Tempore, sed quam.
        </p>
      </div>
      <div className='container-lg mx-auto text-end row'>
        {services.map((service) => (
          <Service
            key={service.id}
            nameService={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </main>
  )
}
