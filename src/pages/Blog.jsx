import { Article } from '../components/Article'
export function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Codez son site en HTML/CSS',
      image: '/technology-1283624_640.jpg',
      publication:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      broadcast: 'Publié le : 28 octobre 2023',
    },
    {
      id: 2,
      title: 'Vendre ses produits sur le web',
      image: '/money-2724241_640.jpg',
      publication:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      broadcast: 'Publié le : 15 octobre 2023',
    },
    {
      id: 3,
      title: 'Se positionner sur Google',
      image: '/macbook-459196_640.jpg',
      publication:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      broadcast: 'Publié le : 26 steptembre 2023',
    },
    {
      id: 4,
      title: 'Coder en responsive design',
      image: '/technology-791029_640.jpg',
      publication:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      broadcast: 'Publié le : 10 steptembre 2023',
    },
    {
      id: 5,
      title: 'Technique de référencement',
      image: '/search-engine-optimization-3014143_640.jpg',
      publication:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      broadcast: 'Publié le : 20 aout 2023',
    },
    {
      id: 6,
      title: 'Aprendre à coder',
      image: '/web-3157323_640.jpg',
      publication:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      broadcast: 'Publié le : 28 juillet 2023',
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
      <div className="container-lg" >
      <div className='container-sm mx-auto'>
        <h1 className='text-center text-uppercase'>Blog</h1>
        <p className='text-center mx-auto'>
          Retrouvez ici quelqueq articles sur le développement web.
        </p>
        <div
          className='mx-auto border-bottom border-4 border-primary'
          style={{ width: '25%' }}
        ></div>
      </div>
      <div className='row align-items-center mt-5 mx-auto'>
        {blogs.map((blog) => (
          <Article
            key={blog.id}
            title={blog.title}
            image={blog.image}
            publication={blog.publication}
            broadcast={blog.broadcast}
          />
        ))}
      </div>

      </div>
    </main>
  )
}
