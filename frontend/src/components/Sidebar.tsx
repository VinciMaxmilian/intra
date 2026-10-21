import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth'
import { api } from '../services/api'
import { Avatar } from './Avatar'
import { BookIcon, FolderIcon, GradIcon, HeadsetIcon, WindowIcon } from './Icons'

const Item = ({ to, icon, children, badge }: { to: string; icon: React.ReactNode; children: React.ReactNode; badge?: number }) => (
  <NavLink to={to} end className={({ isActive }) => 'side-item' + (isActive ? ' active' : '')}>
    <span className="si-icon">{icon}</span>
    <span className="si-text">{children}</span>
    {badge ? <span className="badge static">{badge}</span> : null}
  </NavLink>
)

export function Sidebar({ mode = 'main' }: { mode?: 'main' | 'settings' }) {
  const { user } = useAuth()
  const [shortcuts, setShortcuts] = useState<string[]>([])
  useEffect(() => { api.getShortcuts().then(setShortcuts) }, [])
  if (!user) return null
  const full = `${user.firstName} ${user.lastName}`

  return (
    <aside className="sidebar">
      <Item to="/perfil" icon={<Avatar name={full} src={user.avatar} size={20} />}>{full}</Item>
      <Item to="/" icon={<span className="mini mini-blue"><WindowIcon /></span>} badge={40}>
        Página Principal<small>Post comunicação</small>
      </Item>
      <Item to="/feed" icon={<span className="mini mini-orange"><WindowIcon /></span>}>
        Feed Interativo<small>Post colaborador</small>
      </Item>

      {mode === 'settings' ? (
        <>
          <h3 className="side-title">Configurações</h3>
          <Item to="/configuracoes" icon={<span className="mini mini-blue"><WindowIcon /></span>}>Informações Básicas</Item>
          <Item to="/configuracoes/privacidade" icon={<span className="mini mini-blue"><BookIcon /></span>}>Privacidade</Item>
        </>
      ) : (
        <>
          <h3 className="side-title">Úteis</h3>
          <Item to="/emergencia" icon={<FolderIcon />}>Contatos de Emergência e Rotas de fuga...</Item>
          <Item to="/emails" icon={<BookIcon />}>Lista de e-mail...</Item>

          <h3 className="side-title">Serviços</h3>
          <Item to="/p/helpdesk-ti" icon={<HeadsetIcon />}>Helpdesk <b>TI</b></Item>
          <Item to="/p/helpdesk-sea" icon={<HeadsetIcon />}>Helpdesk <b>SEA</b></Item>
          <Item to="/p/universidade" icon={<GradIcon />}>Universidade A1</Item>

          <h3 className="side-title">Atalhos</h3>
          {shortcuts.map((s) => (
            <Item key={s} to={`/p/${s.toLowerCase().replace(/\s+/g, '-')}`} icon={<img className="sc-logo" src="/img/logo.png" alt="" />}>
              {s}
            </Item>
          ))}
        </>
      )}
    </aside>
  )
}
