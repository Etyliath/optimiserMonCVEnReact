import { Service } from '../components/Service'

export function Services() {
  const services = [
    {
      name: 'Service 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi eius cupiditate reiciendis inventore, quasi sapiente.',
      icon: 'globe',
    },
    {
      name: 'Service 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi eius cupiditate reiciendis inventore, quasi sapiente.',
      icon: 'cloud',
    },
    {
      name: 'Service 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi eius cupiditate reiciendis inventore, quasi sapiente.',
      icon: 'mobile',
    },
    {
      name: 'Service 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi eius cupiditate reiciendis inventore, quasi sapiente.',
      icon: 'code',
    },
    {
      name: 'Service 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi eius cupiditate reiciendis inventore, quasi sapiente.',
      icon: 'palette',
    },
    {
      name: 'Service 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi eius cupiditate reiciendis inventore, quasi sapiente.',
      icon: 'laptop-code',
    },
  ]

  return (
    <>
      <div className='container-fluid mx-2'>
        <h1 className='text-center'>Mes Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem
          dolores adipisci blanditiis, qui doloribus ad dolore a aliquid
          doloremque ea similique incidunt, molestiae temporibus officia
          aspernatur! Tempore, sed quam.
        </p>
      </div>
      <div className='container-lg mx-auto row'>
        {services.map((service) => (
          <Service
            key={service.name}
            nameService={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  )
}
