import { useEffect, useState } from 'react'
import { SearchIcon } from '../components/Icons'
import { api } from '../services/api'
import type { EmailEntry, EmailFilters } from '../types'

const empty: EmailFilters = { initials: '', name: '', email: '', unit: '', area: '' }
const fields: [keyof EmailFilters, string, string][] = [
  ['initials', 'Iniciais:', 'Digite as iniciais...'],
  ['name', 'Nome:', 'Digite o nome...'],
  ['email', 'E-mail:', 'Digite o e-mail...'],
  ['unit', 'Unidade:', 'Digite a unidade...'],
  ['area', 'Área:', 'Digite a área...'],
]

export function EmailList() {
  const [f, setF] = useState(empty)
  const [rows, setRows] = useState<EmailEntry[]>([])
  useEffect(() => { api.getEmails(f).then(setRows) }, [f])

  return (
    <>
      <div className="banner"><h1>Lista de E-mails</h1></div>
      <section className="card filters">
        <h3><SearchIcon /> Filtros de Pesquisa</h3>
        <div className="filter-grid">
          {fields.map(([k, label, ph]) => (
            <label key={k}>{label}
              <input placeholder={ph} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} />
            </label>
          ))}
        </div>
        <button className="btn" onClick={() => setF(empty)}>Limpar Filtros</button>
      </section>
      <div className="card table-card">
        <table>
          <thead><tr><th>Iniciais</th><th>Nome</th><th>E-Mail</th><th>Unidade</th><th>Área</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.email}><td>{r.initials}</td><td>{r.name}</td><td>{r.email}</td><td>{r.unit}</td><td>{r.area}</td></tr>
            ))}
            {!rows.length && <tr><td colSpan={5} className="empty">Nenhum resultado.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  )
}
