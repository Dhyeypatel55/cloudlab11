import Layout from '../components/Layout'
import ProgressRing from '../components/ProgressRing'

const techStats = [
  { name: 'AWS', done: 12, total: 16, color: 'bg-orange-400' },
  { name: 'Azure', done: 10, total: 14, color: 'bg-blue-500' },
  { name: 'Docker', done: 8, total: 12, color: 'bg-sky-400' },
  { name: 'Kubernetes', done: 6, total: 10, color: 'bg-indigo-500' },
]

function ProgressPage() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900">Progress</h1>
        <p className="text-gray-500 mt-1">Track how far you've come across every technology.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-gray-900 mb-4 self-start">Overall Completion</h2>
            <ProgressRing percentage={48} />
            <p className="text-gray-500 text-sm mt-3">36 / 72 Labs Completed</p>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">By Technology</h2>
            <div className="flex flex-col gap-4">
              {techStats.map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{t.name}</span>
                    <span className="text-gray-400">{t.done} / {t.total}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`${t.color} h-2 rounded-full`}
                      style={{ width: `${(t.done / t.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProgressPage