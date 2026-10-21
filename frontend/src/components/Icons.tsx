// Ícones SVG simples (placeholders no estilo do portal)
const s = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const StarIcon = () => (
  <svg {...s} stroke="currentColor"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" /></svg>
)
export const WindowIcon = () => (
  <svg {...s} stroke="currentColor"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 13h6M7 16h10" /></svg>
)
export const FolderIcon = () => (
  <svg {...s} stroke="currentColor"><path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
)
export const BookIcon = () => (
  <svg {...s} stroke="currentColor"><path d="M4 5a2 2 0 012-2h5v17H6a2 2 0 00-2 2zM20 5a2 2 0 00-2-2h-5v17h5a2 2 0 012 2z" /></svg>
)
export const MailIcon = () => (
  <svg {...s} stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
)
export const CakeIcon = () => (
  <svg {...s} stroke="currentColor"><path d="M4 20h16v-6a2 2 0 00-2-2H6a2 2 0 00-2 2zM12 12V8M12 5.5v.5" /><path d="M4 16c2 1.5 4 1.5 6 0s4-1.5 6 0 3 1 4 0" /></svg>
)
export const SearchIcon = () => (
  <svg {...s} stroke="currentColor"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
)
export const LikeIcon = () => (
  <svg {...s} width={16} height={16} stroke="currentColor"><path d="M7 11v9H4v-9zM7 11l4-8a2 2 0 012 2v4h6a2 2 0 012 2l-1.5 7a2 2 0 01-2 1.5H7" /></svg>
)
export const CommentIcon = () => (
  <svg {...s} width={16} height={16} stroke="currentColor"><path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" fill="currentColor" /></svg>
)
export const TrashIcon = () => (
  <svg {...s} width={16} height={16} stroke="currentColor"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" /></svg>
)
export const HeadsetIcon = () => <span aria-hidden>🧑‍💻</span>
export const GradIcon = () => <span aria-hidden>🎓</span>

const moods = [
  { c: '#29b6e6', m: 'M8 14.5c1 2 7 2 8 0z' },
  { c: '#4cc94c', m: 'M8 14c1.2 2 6.8 2 8 0' },
  { c: '#f2d21b', m: 'M8.5 15h7' },
  { c: '#f0742a', m: 'M8 16c1.2-2 6.8-2 8 0' },
  { c: '#e8323c', m: 'M8 16.5c1.2-2.6 6.8-2.6 8 0' },
]
export const MoodFace = ({ i }: { i: number }) => (
  <svg width="26" height="26" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10.5" fill={moods[i].c} />
    <circle cx="8.6" cy="10" r="1.2" fill="#fff" />
    <circle cx="15.4" cy="10" r="1.2" fill="#fff" />
    <path d={moods[i].m} stroke="#fff" strokeWidth="1.6" fill={i === 0 ? '#fff' : 'none'} strokeLinecap="round" />
  </svg>
)
