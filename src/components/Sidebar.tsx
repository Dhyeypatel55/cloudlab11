import { Home, FolderKanban, BookOpen, Terminal, Trophy, Bookmark, LineChart, Settings, LogOut, Cloud } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'My Labs', icon: FolderKanban, path: '/my-labs' },
    { name: 'Learn', icon: BookOpen, path: '/learn' },
    { name: 'Practice', icon: Terminal, path: '/practice' },
    { name: 'Challenges', icon: Trophy, path: '/challenges' },
    { name: 'Bookmarks', icon: Bookmark, path: '/bookmarks' },
    { name: 'Progress', icon: LineChart, path: '/progress' },
  ]

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed left-0 top-0">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <Cloud size={20} color="white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">
              Cloud<span className="text-blue-600">Lab11</span>
            </h1>
            <p className="text-[10px] text-gray-400 tracking-wide">CLOUD · LAB · LIMITLESS</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="mt-4 px-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <item.icon size={18} />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-3 pb-5">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <Settings size={18} />
          Settings
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <LogOut size={18} />
          Logout
        </NavLink>

        {/* Promo card */}
        <div className="mt-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 text-white">
          <p className="font-semibold text-sm leading-snug">
            Practice<br />Build<br />Grow
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar