import { Blog } from '../components/Blog'
export function Blogs() {
  const blogs = [
    {
      id:1,
      title: 'Actualité',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      id:2,
      title: 'Actualité',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      id:3,
      title: 'Actualité',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      id:4,
      title: 'Actualité',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      id:5,
      title: 'Actualité',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      id:6,
      title: 'Actualité',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
  ]
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Blogs</h1>
      <div className='container-fluid row gap-2 justify-content-center'>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            title={blog.title}
            image={blog.image}
            info={blog.info}
            publication={blog.publication}
          />
        ))}
      </div>
    </div>
  )
}
