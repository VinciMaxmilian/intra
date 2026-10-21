import { useEffect, useState, type FormEvent } from 'react'
import { PostCard } from '../components/PostCard'
import { Avatar } from '../components/Avatar'
import { useAuth } from '../auth'
import { api } from '../services/api'
import type { Post } from '../types'

export function Feed({ channel }: { channel: Post['channel'] }) {
  const { user } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])
  const [text, setText] = useState('')
  useEffect(() => { api.getPosts(channel).then(setPosts) }, [channel])

  const publish = async (e: FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    const p = await api.createPost(text)
    setPosts([p, ...posts])
    setText('')
  }
  const isFeed = channel === 'feed'

  return (
    <>
      <div className="banner">
        <h1>{isFeed ? 'Feed Interativo' : 'Página Principal'}</h1>
        <p>{isFeed ? 'Publicações dos colaboradores' : 'Comunicados da empresa'}</p>
      </div>
      {isFeed && user && (
        <form className="composer" onSubmit={publish}>
          <Avatar name={user.firstName} src={user.avatar} size={36} />
          <input
            placeholder="Nova publicação (será revisada pela moderação antes de ser exibida)..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      )}
      {posts.map((p) => (
        <PostCard key={p.id} post={p} onDelete={(id) => setPosts(posts.filter((x) => x.id !== id))} />
      ))}
    </>
  )
}
