import { Bookmark, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const bookmarks = [
  { name: 'Create an RDS Database', tech: 'AWS', level: 'Intermediate' },
  { name: 'Deploy a Virtual Machine', tech: 'Azure', level: 'Beginner' },
  { name: 'Write a Dockerfile', tech: 'Docker', level: 'Beginner' },
]

function Bookmarks() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900">Bookmarks</h1>
        <p className="text-gray-500 mt-1">Labs you've saved to come back to later.</p>

        {bookmarks.length === 0 ? (
          <div className="bg-white rounded-xl p-10 border border-gray-100 text-center mt-6">
            <Bookmark size={32} className="text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">No bookmarks yet. Save a lab to see it here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-6">
            {bookmarks.map((b) => (
              <div
                key={b.name}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Bookmark size={16} className="fill-blue-500 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{b.name}</p>
                    <p className="text-xs text-gray-400">{b.tech} · {b.level}</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline">
                  Start Lab <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Bookmarks