import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'
import type { Birthday, Tile } from '../types'
import { Avatar } from './Avatar'
import { MoodFace } from './Icons'

export function RightPanel() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [mood, setMood] = useState<number | null>(null)
  const [bdays, setBdays] = useState<Birthday[]>([])
  useEffect(() => { api.getTiles().then(setTiles); api.getBirthdays().then(setBdays) }, [])

  return (
    <aside className="right">
      <div className="mood">
        <h4>Como estou me sentindo hoje?</h4>
        <div className="mood-row">
          {[0, 1, 2, 3, 4].map((i) => (
            <button key={i} className={'mood-btn' + (mood === i ? ' sel' : '')} onClick={() => setMood(i)} aria-label={`Humor ${i + 1}`}>
              <MoodFace i={i} />
            </button>
          ))}
        </div>
      </div>
      {tiles.map((t) => (
        <Link key={t.slug} className="tile" to={t.slug === 'emergencia' ? '/emergencia' : `/p/${t.slug}`}>
          <img src={`/icons/${t.slug}.png`} alt="" />
          <span>{t.label}</span>
        </Link>
      ))}
      <h4 className="bday-title">Aniversariantes</h4>
      {bdays.map((b) => (
        <div key={b.name} className="bday-item"><Avatar name={b.name} src={b.avatar} size={30} /> <div><strong>{b.name}</strong><div className="muted">{b.when} 🎂</div></div></div>
      ))}
      <h4 className="bday-title">🎂 Aniversariantes do Mês</h4>
    </aside>
  )
}
