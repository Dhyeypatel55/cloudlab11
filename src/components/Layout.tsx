import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 bg-gray-50 min-h-screen">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default Layout