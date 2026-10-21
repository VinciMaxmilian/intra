import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { EmailList } from './pages/EmailList'
import { Feed } from './pages/Feed'
import { Login } from './pages/Login'
import { Emergency, Placeholder } from './pages/Placeholder'
import { Profile } from './pages/Profile'
import { Privacy, Settings } from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Feed channel="comunicacao" />} />
        <Route path="/feed" element={<Feed channel="feed" />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/emergencia" element={<Emergency />} />
        <Route path="/p/:slug" element={<Placeholder />} />
      </Route>
      <Route element={<Layout right={false} />}>
        <Route path="/emails" element={<EmailList />} />
      </Route>
      <Route element={<Layout right={false} sidebar="settings" />}>
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/configuracoes/privacidade" element={<Privacy />} />
      </Route>
    </Routes>
  )
}
