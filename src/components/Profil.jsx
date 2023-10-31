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
    <div className='container mx-auto'>
      <div key={users.id}>
        <h2 className='text-center'>{users.name}</h2>
        <img
          className=' rounded mx-auto d-block'
          src={users.avatar_url}
          alt="photo d'humain"
        />
        <p className='text-center'>{users.url}</p>
        <p>{users.bio}</p>
      </div>
    </div>
  )
}
