export function Avatar({ name, src, size = 32 }: { name: string; src?: string; size?: number }) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('')
  return src ? (
    <img className="avatar" src={src} alt={name} width={size} height={size} style={{ width: size, height: size }} />
  ) : (
    <span className="avatar avatar-ph" style={{ width: size, height: size, fontSize: size * 0.38 }}>
      {initials}
    </span>
  )
}
