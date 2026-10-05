import { PlayCircle, Clock } from 'lucide-react'
import Layout from '../components/Layout'

const courses = [
  { title: 'AWS Fundamentals', lessons: 12, duration: '3h 20m', level: 'Beginner' },
  { title: 'Azure Core Concepts', lessons: 10, duration: '2h 45m', level: 'Beginner' },
  { title: 'Docker Deep Dive', lessons: 8, duration: '2h 10m', level: 'Intermediate' },
  { title: 'Kubernetes Essentials', lessons: 14, duration: '4h 05m', level: 'Intermediate' },
  { title: 'Terraform for Infrastructure as Code', lessons: 9, duration: '2h 30m', level: 'Advanced' },
]

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-600',
  Intermediate: 'bg-blue-50 text-blue-600',
  Advanced: 'bg-orange-50 text-orange-600',
}

function Learn() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900">Learn</h1>
        <p className="text-gray-500 mt-1">Structured courses to build your cloud fundamentals.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <PlayCircle size={22} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{course.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{course.lessons} lessons</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Learn