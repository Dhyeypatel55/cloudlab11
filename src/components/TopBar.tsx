import { Search, Bell } from 'lucide-react'

function TopBar() {
  return (
    <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-80">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for labs, topics or technologies..."
          className="w-full bg-transparent outline-none text-sm text-gray-600"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-gray-400 hover:text-gray-600 relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            DP
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 leading-tight">Dhyey Patel</p>
            <p className="text-xs text-gray-400 leading-tight">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar