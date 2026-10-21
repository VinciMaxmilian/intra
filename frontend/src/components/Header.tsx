import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'
import { Avatar } from './Avatar'
import { StarIcon, WindowIcon } from './Icons'

export function Header() {
  const { user, logout } = useAuth()
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  if (!user) return null
  const full = `${user.firstName} ${user.lastName}`

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src="/img/logo-branco.png" alt="Grupo A1" />
      </Link>
      <div className="header-actions" ref={ref}>
        <Link to="/p/destaques" className="hbtn hbtn-star" title="Destaques"><StarIcon /></Link>
        <Link to="/" className="hbtn hbtn-blue" title="Página Principal">
          <WindowIcon />
          <span className="badge">40</span>
        </Link>
        <Link to="/feed" className="hbtn hbtn-orange" title="Feed Interativo"><WindowIcon /></Link>
        <button className="hbtn-avatar" onClick={() => setOpen((o) => !o)} aria-label="Menu do usuário">
          <Avatar name={full} src={user.avatar} size={34} />
        </button>
        {open && (
          <div className="user-menu">
            <div className="um-name">{full}</div>
            <div className="um-mail">{user.email}</div>
            <div className="um-session">ID de Sessão: {user.id}</div>
            <button onClick={() => { setOpen(false); nav('/perfil') }}>Meu Perfil</button>
            <button onClick={() => { setOpen(false); nav('/configuracoes') }}>Configurações</button>
            <button onClick={() => { logout(); nav('/login') }}>Sair</button>
          </div>
        )}
      </div>
    </header>
  )
}
