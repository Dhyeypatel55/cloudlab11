import { Star, Clock, CheckCircle2 } from 'lucide-react'
import Layout from '../components/Layout'

const myLabs = [
  { name: 'Launch and Configure an EC2 Instance', tech: 'AWS', status: 'In Progress', percent: 60, rating: 4.0 },
  { name: 'Deploy a Virtual Machine', tech: 'Azure', status: 'In Progress', percent: 40, rating: 3.5 },
  { name: 'Build and Run a Docker Container', tech: 'Docker', status: 'Completed', percent: 100, rating: 4.5 },
  { name: 'Create and Manage a Kubernetes Cluster', tech: 'Kubernetes', status: 'In Progress', percent: 20, rating: 3.0 },
  { name: 'Create an S3 Bucket', tech: 'AWS', status: 'Completed', percent: 100, rating: 4.2 },
]

const statusColor: Record<string, string> = {
  'In Progress': 'bg-blue-50 text-blue-600',
  'Completed': 'bg-green-50 text-green-600',
}

function MyLabs() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900">My Labs</h1>
        <p className="text-gray-500 mt-1">All the labs you've started or completed.</p>

        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mt-6">
          <div className="flex flex-col">
            {myLabs.map((lab) => (
              <div
                key={lab.name}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3 flex-1">
                  {lab.status === 'Completed' ? (
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  ) : (
                    <Clock size={18} className="text-blue-500 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{lab.name}</p>
                    <p className="text-xs text-gray-400">{lab.tech}</p>
                    <div className="w-full max-w-xs bg-gray-100 rounded-full h-1.5 mt-2">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${lab.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    {lab.rating}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor[lab.status]}`}>
                    {lab.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyLabs