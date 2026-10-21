// Camada de acesso a dados. Hoje devolve mocks; quando o backend FastAPI existir,
// troque o corpo de cada função por fetch('/api/...') mantendo as assinaturas.
import { birthdays, demoUser, emails, posts, shortcuts, tiles } from '../mocks/data'
import type { Birthday, EmailEntry, EmailFilters, Post, Tile, User } from '../types'

const wait = <T,>(value: T, ms = 150): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms))

export const api = {
  login: (_username: string, _password: string): Promise<User> => wait(demoUser, 400),
  me: (): Promise<User> => wait(demoUser),
  updateProfile: (data: Pick<User, 'firstName' | 'lastName'>): Promise<User> =>
    wait({ ...demoUser, ...data }),
  getTiles: (): Promise<Tile[]> => wait(tiles, 0),
  getShortcuts: (): Promise<string[]> => wait(shortcuts, 0),
  getPosts: (channel: Post['channel']): Promise<Post[]> =>
    wait(posts.filter((p) => p.channel === channel)),
  getMyPosts: (): Promise<Post[]> => wait(posts.filter((p) => p.mine)),
  createPost: (text: string): Promise<Post> =>
    wait({
      id: Date.now(),
      author: `${demoUser.firstName} ${demoUser.lastName}`,
      avatar: demoUser.avatar,
      date: 'agora',
      text,
      channel: 'feed',
      likes: 0,
      comments: 0,
      mine: true,
    }),
  getBirthdays: (): Promise<Birthday[]> => wait(birthdays),
  getEmails: (f: EmailFilters): Promise<EmailEntry[]> => {
    const has = (v: string, q: string) => v.toLowerCase().includes(q.trim().toLowerCase())
    return wait(
      emails.filter(
        (e) =>
          has(e.initials, f.initials) &&
          has(e.name, f.name) &&
          has(e.email, f.email) &&
          has(e.unit, f.unit) &&
          has(e.area, f.area),
      ),
    )
  },
}
