import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Cloud, Clock, ChevronLeft, CheckCircle2, Circle } from 'lucide-react'

interface LabData {
  name: string
  desc: string
  level: string
}

function Lab() {
  const navigate = useNavigate()
  const location = useLocation()

  const state = location.state as { lab?: LabData; tech?: string } | null

  const lab: LabData = state?.lab || {
    name: 'Create an EC2 Instance',
    desc: 'Learn how to launch and configure a virtual server using Terraform on AWS.',
    level: 'Beginner',
  }
  const tech = state?.tech || 'aws'

  const [secondsLeft, setSecondsLeft] = useState(20 * 60)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')

  const levelColor: Record<string, string> = {
    Beginner: 'text-green-400 bg-green-900/30',
    Intermediate: 'text-blue-400 bg-blue-900/30',
    Advanced: 'text-orange-400 bg-orange-900/30',
  }

  const tasks = [
    { text: 'Run terraform init', done: true },
    { text: 'Run terraform plan', done: false },
    { text: 'Run terraform apply', done: false },
    { text: 'Verify resource is running', done: false },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-[380px] bg-gray-800 flex flex-col border-r border-gray-700">
        <div className="p-4 border-b border-gray-700 flex items-center gap-2">
          <button onClick={() => navigate('/practice')} className="text-gray-400 hover:text-white">
            <ChevronLeft size={20} />
          </button>
          <Cloud size={18} className="text-blue-400" />
          <span className="font-semibold text-sm">CloudLab11</span>
        </div>

        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2">
            <Clock size={16} className="text-orange-400" />
            <span className="font-mono text-lg font-semibold">{formattedTime}</span>
            <span className="text-xs text-gray-400 ml-auto">remaining</span>
          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <span className={"text-xs font-medium px-2 py-1 rounded " + (levelColor[lab.level] || levelColor.Beginner)}>
            {lab.level}
          </span>
          <span className="text-xs font-medium text-gray-400 uppercase ml-2">{tech}</span>
          <h1 className="text-xl font-bold mt-3">{lab.name}</h1>
          <p className="text-gray-400 text-sm mt-2">{lab.desc}</p>

          <h2 className="text-sm font-semibold text-gray-300 mt-6 mb-3">TASKS</h2>
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div key={task.text} className="flex items-center gap-2 text-sm">
                {task.done ? (
                  <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                ) : (
                  <Circle size={16} className="text-gray-500 flex-shrink-0" />
                )}
                <span className={task.done ? 'text-gray-400 line-through' : 'text-gray-200'}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-black">
        <div className="h-10 bg-gray-800 flex items-center gap-2 px-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-400 ml-3">student@cloudlab11: ~</span>
        </div>

        <div className="flex-1 p-4 font-mono text-sm text-green-400 overflow-y-auto">
          <p>Welcome to CloudLab11.</p>
          <p>Environment is being prepared...</p>
          <p className="mt-2">student@cloudlab11:~$ <span className="animate-pulse">_</span></p>
        </div>
      </div>
    </div>
  )
}

export default Lab