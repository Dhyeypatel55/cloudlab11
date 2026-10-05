import { Star } from 'lucide-react'
import Layout from '../components/Layout'
import ProgressRing from '../components/ProgressRing'

function Dashboard() {
  const techProgress = [
    { name: 'AWS', done: 12, total: 16, rating: 4.2, color: 'bg-orange-400' },
    { name: 'Azure', done: 10, total: 14, rating: 4.0, color: 'bg-blue-500' },
    { name: 'Docker', done: 8, total: 12, rating: 3.8, color: 'bg-sky-400' },
    { name: 'Kubernetes', done: 6, total: 10, rating: 3.6, color: 'bg-indigo-500' },
  ]

  const myLearning = [
    { title: 'Launch and Configure an EC2 Instance', percent: 60, rating: 4.0 },
    { title: 'Deploy a Virtual Machine', percent: 40, rating: 3.5 },
    { title: 'Build and Run a Docker Container', percent: 80, rating: 4.5 },
    { title: 'Create and Manage a Kubernetes Cluster', percent: 20, rating: 3.0 },
  ]

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900">Hey Dhyey!</h1>
        <p className="text-gray-500 mt-1">Ready to practice today? Real labs. Real skills. Real opportunities.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {techProgress.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{t.done} / {t.total} Labs</p>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                <div
                  className={`${t.color} h-2 rounded-full`}
                  style={{ width: `${(t.done / t.total) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                {t.rating} / 5
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">My Learning</h2>
            <div className="flex flex-col gap-4">
              {myLearning.map((item) => (
                <div key={item.title} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-6">
                    <span className="text-sm text-gray-500 w-10">{item.percent}%</span>
                    <div className="flex items-center gap-1 text-sm text-gray-600 w-16">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </div>
                    <button className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-blue-100">
                      Continue →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-gray-900 mb-4 self-start">Overall Progress</h2>
            <ProgressRing percentage={48} />
            <p className="text-gray-500 text-sm mt-3">36 / 72 Labs Completed</p>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              3.8 / 5 Average Score
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard