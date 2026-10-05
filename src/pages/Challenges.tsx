import { Trophy, Users, Flag } from 'lucide-react'
import Layout from '../components/Layout'

const challenges = [
  { name: 'Deploy a 3-Tier App in Under 30 Minutes', difficulty: 'Hard', participants: 234, points: 500 },
  { name: 'Secure an S3 Bucket', difficulty: 'Easy', participants: 892, points: 100 },
  { name: 'Fix the Broken Terraform Config', difficulty: 'Medium', participants: 456, points: 250 },
  { name: 'Build a CI/CD Pipeline', difficulty: 'Hard', participants: 198, points: 500 },
]

const diffColor: Record<string, string> = {
  Easy: 'bg-green-50 text-green-600',
  Medium: 'bg-blue-50 text-blue-600',
  Hard: 'bg-red-50 text-red-600',
}

function Challenges() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900">Challenges</h1>
        <p className="text-gray-500 mt-1">Test your skills against timed, scored challenges.</p>

        <div className="flex flex-col gap-4 mt-6">
          {challenges.map((c) => (
            <div key={c.name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy size={20} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{c.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${diffColor[c.difficulty]}`}>
                      {c.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Users size={12} /> {c.participants} joined
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                  <Flag size={14} className="text-purple-500" /> {c.points} pts
                </span>
                <button className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-blue-700">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Challenges