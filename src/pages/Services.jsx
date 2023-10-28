import { Service } from '../components/Service'

export function Services() {
  const services = [
    {
      id:1,
      name: 'Service 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'globe',
    },
    {
      id:2,
      name: 'Service 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'cloud',
    },
    {
      id:3,
      name: 'Service 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'mobile',
    },
    {
      id:4,
      name: 'Service 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'code',
    },
    {
      id:5,
      name: 'Service 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'palette',
    },
    {
      id:6,
      name: 'Service 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: 'laptop-code',
    },
  ]

  return (
    <main className='container-lg mt-2'>
      <div className='container-fluid mx-2'>
        <h1 className='text-center'>Mes Services</h1>
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
