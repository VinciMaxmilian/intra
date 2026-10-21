import { useParams } from 'react-router-dom'
import { tiles } from '../mocks/data'

export function Placeholder({ title }: { title?: string }) {
  const { slug = '' } = useParams()
  const name = title ?? tiles.find((t) => t.slug === slug)?.label ?? slug.replace(/-/g, ' ')
  return (
    <>
      <div className="banner"><h1>{name}</h1><p>Conteúdo em construção</p></div>
      <div className="card empty">Placeholder — esta página será implementada junto com o backend.</div>
    </>
  )
}

export function Emergency() {
  const rows = [
    ['Portaria', 'Ramal 0000'],
    ['Brigada de Emergência', 'Ramal 0000'],
    ['Segurança do Trabalho', 'Ramal 0000'],
    ['Ambulatório', 'Ramal 0000'],
  ]
  return (
    <>
      <div className="banner"><h1>Contatos de Emergência e Rotas</h1></div>
      <div className="card table-card">
        <table>
          <thead><tr><th>Contato</th><th>Telefone</th></tr></thead>
          <tbody>{rows.map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="card post-image" style={{ margin: 12 }}>Mapa de rotas de fuga (placeholder)</div>
    </>
  )
}
