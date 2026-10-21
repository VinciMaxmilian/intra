import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth'
import { Header } from './Header'
import { RightPanel } from './RightPanel'
import { Sidebar } from './Sidebar'

export function Layout({ right = true, sidebar = 'main' }: { right?: boolean; sidebar?: 'main' | 'settings' }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return (
    <>
      <Header />
      <div className={'shell' + (right ? '' : ' no-right')}>
        <Sidebar mode={sidebar} />
        <main className="main"><Outlet /></main>
        {right && <RightPanel />}
      </div>
    </>
  )
}
