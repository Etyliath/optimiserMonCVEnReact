import { useEffect, useState } from 'react'

export function Profil() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const r = await fetch('https://api.github.com/users/github-john-doe')
        const json = await r.json()
        setUsers(json)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div
      className='container d-flex flex-column align-items-center justify-content-center mx-auto'
      key={users.id}
    >
      <h2 className='py-3'>Github user</h2>
      <h3 className='text-center'>{users.name}</h3>
      <img
        className=' rounded mx-auto d-block py-3'
        src={users.avatar_url}
        alt="photo d'humain"
      />
      <p>{users.bio}</p>
      <p>Abonnées : {users.followers}</p>
      <p>Abonnements : {users.following}</p>
      <p>Crée le : {users.created_at}</p>
      <p>Modifié le : {users.updated_at}</p>
      <a
        href={users.repos_url}
        className='text-center text-decoration-none'
        target='_blank'
        rel='noopener noreferrer'
      >
        URL repositories : {users.repos_url}
      </a>
    </div>
  )
}
