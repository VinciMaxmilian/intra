import { useState, type FormEvent } from 'react'
import { Avatar } from '../components/Avatar'
import { useAuth } from '../auth'
import { api } from '../services/api'

export function Settings() {
  const { user, setUser } = useAuth()
  const [first, setFirst] = useState(user?.firstName ?? '')
  const [last, setLast] = useState(user?.lastName ?? '')
  const [saved, setSaved] = useState(false)
  if (!user) return null

  const save = async (e: FormEvent) => {
    e.preventDefault()
    setUser(await api.updateProfile({ firstName: first, lastName: last }))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <form className="card settings" onSubmit={save}>
      <Avatar name={first} src={user.avatar} size={150} />
      <div className="fields">
        <label>Primeiro Nome:<input value={first} onChange={(e) => setFirst(e.target.value)} /></label>
        <label>Segundo Nome:<input value={last} onChange={(e) => setLast(e.target.value)} /></label>
        <button className="btn">Salvar</button>
        {saved && <span className="muted"> Salvo (mock)</span>}
      </div>
    </form>
  )
}

export function Privacy() {
  return (
    <div className="card settings">
      <div className="fields">
        <label className="check"><input type="checkbox" defaultChecked /> Exibir meu aniversário aos colegas</label>
        <label className="check"><input type="checkbox" defaultChecked /> Exibir meu e-mail no perfil</label>
        <button className="btn">Salvar</button>
      </div>
    </div>
  )
}
