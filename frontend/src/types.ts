export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  avatar?: string
  birthday: string
}

export interface Post {
  id: number
  author: string
  avatar?: string
  date: string
  text: string
  link?: string
  hasImage?: boolean
  channel: 'comunicacao' | 'feed'
  likes: number
  comments: number
  mine?: boolean
}

export interface Tile {
  slug: string
  label: string
}

export interface EmailEntry {
  initials: string
  name: string
  email: string
  unit: string
  area: string
}

export interface EmailFilters {
  initials: string
  name: string
  email: string
  unit: string
  area: string
}

export interface Birthday {
  name: string
  avatar?: string
  when: string
}
