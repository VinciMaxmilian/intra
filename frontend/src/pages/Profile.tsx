import { useEffect, useState } from 'react'
import { Avatar } from '../components/Avatar'
import { CakeIcon, MailIcon } from '../components/Icons'
import { PostCard } from '../components/PostCard'
import { useAuth } from '../auth'
import { api } from '../services/api'
import type { Post } from '../types'

export function Profile() {
  const { user } = useAuth()
  const [tab, setTab] = useState<'pub' | 'marc'>('pub')
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => { api.getMyPosts().then(setPosts) }, [])
  if (!user) return null
  const full = `${user.firstName} ${user.lastName}`

  return (
    <>
      <div className="card cover-card">
        <div className="cover">
          <div className="cover-avatar"><Avatar name={full} src={user.avatar} size={118} /></div>
          <h1>{full}</h1>
        </div>
        <div className="tabs">
          <button className={tab === 'pub' ? 'on' : ''} onClick={() => setTab('pub')}>Publicações</button>
          <button className={tab === 'marc' ? 'on' : ''} onClick={() => setTab('marc')}>Marcações</button>
        </div>
      </div>
      <div className="profile-info card">
        <span><MailIcon /> {user.email}</span>
        <span><CakeIcon /> {user.birthday}</span>
      </div>
      {tab === 'pub'
        ? posts.map((p) => <PostCard key={p.id} post={{ ...p }} />)
        : <div className="card empty">Nenhuma marcação ainda.</div>}
    </>
  )
}
