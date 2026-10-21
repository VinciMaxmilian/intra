import type { Post } from '../types'
import { Avatar } from './Avatar'
import { CommentIcon, LikeIcon, TrashIcon } from './Icons'

export function PostCard({ post, onDelete }: { post: Post; onDelete?: (id: number) => void }) {
  return (
    <article className="card post">
      <div className="post-head">
        <Avatar name={post.author} src={post.avatar} size={34} />
        <div>
          <strong>{post.author}</strong>
          <div className="muted">{post.date}</div>
        </div>
      </div>
      <p>{post.text}</p>
      {post.link && <p><strong>{post.link}</strong></p>}
      {post.hasImage && <div className="post-image">Imagem da publicação (placeholder)</div>}
      <footer className="post-foot">
        <span><LikeIcon /> {post.likes}</span>
        <span><CommentIcon /> {post.comments}</span>
        {post.mine && onDelete && (
          <button className="icon-btn" onClick={() => onDelete(post.id)} aria-label="Excluir"><TrashIcon /></button>
        )}
      </footer>
    </article>
  )
}
