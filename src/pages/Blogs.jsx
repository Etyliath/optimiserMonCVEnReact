import { Blog } from '../components/Blog'
export function Blogs() {
  const blogs = [
    {
      title: 'Blog 1',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      title: 'Blog 2',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      title: 'Blog 3',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      title: 'Blog 4',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      title: 'Blog 5',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
    {
      title: 'Blog 6',
      image: '/hands-820272_640.jpg',
      info: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      publication: 'Publié le : 20 steptembre 2023',
    },
  ]
  return (
    <div>
      <h1 className='text-center'>Blogs</h1>
      <div className='container-fluid row gap-2 justify-content-center'>
        {blogs.map((blog) => (
          <Blog
            key={blog.title}
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
