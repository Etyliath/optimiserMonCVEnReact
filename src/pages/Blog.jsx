import { Article } from '../components/Article'
import datas from '../datas.json'

export function Blog() {
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
        {datas.articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            image={article.image}
            publication={article.publication}
            broadcast={article.broadcast}
          />
        ))}
      </div>

      </div>
    </main>
  )
}
