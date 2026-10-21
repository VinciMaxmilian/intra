import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'

export function Login() {
  const { user, login } = useAuth()
  const nav = useNavigate()
  const [u, setU] = useState('')
  const [p, setP] = useState('')
  const [keep, setKeep] = useState(true)
  const [busy, setBusy] = useState(false)

  if (user) return <Navigate to="/" replace />

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    await login(u, p)
    nav('/')
  }

  return (
    <div className="login">
      <form className="login-card" onSubmit={submit}>
        <h1>Intranet A1</h1>
        <small>Sistema de Gerenciamento</small>
        <h2>Efetue login para continuar</h2>
        <input placeholder="Digite seu usuario de rede" value={u} onChange={(e) => setU(e.target.value)} autoFocus />
        <input type="password" placeholder="Digite sua senha de rede" value={p} onChange={(e) => setP(e.target.value)} />
        <label className="check">
          <input type="checkbox" checked={keep} onChange={(e) => setKeep(e.target.checked)} /> Mantenha-me conectado
        </label>
        <button className="btn" disabled={busy}>{busy ? 'Entrando...' : 'Entrar'}</button>
        <a className="forgot" href="#" onClick={(e) => e.preventDefault()}>Esqueceu sua senha?</a>
      </form>
      <footer className="login-foot">
        <span><a href="#">Website</a><a href="#">Portal A1</a></span>
        <span>Copyright © 2026 A1 Engenharia – All Rights Reserved</span>
      </footer>
    </div>
  )
}
