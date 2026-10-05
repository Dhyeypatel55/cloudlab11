import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

const techs = [
  { id: 'aws', name: 'AWS', labs: 10, color: 'border-orange-400', bg: 'bg-orange-50' },
  { id: 'azure', name: 'Azure', labs: 10, color: 'border-blue-400', bg: 'bg-blue-50' },
  { id: 'docker', name: 'Docker', labs: 10, color: 'border-sky-400', bg: 'bg-sky-50' },
  { id: 'kubernetes', name: 'Kubernetes', labs: 10, color: 'border-indigo-400', bg: 'bg-indigo-50' },
]

const labsData: Record<string, { name: string; desc: string; level: string }[]> = {
  aws: [
    { name: 'Launch an EC2 Instance', desc: 'Create and configure a virtual server in AWS.', level: 'Beginner' },
    { name: 'Configure Security Groups', desc: 'Allow and restrict traffic to your EC2 instance.', level: 'Beginner' },
    { name: 'Create an S3 Bucket', desc: 'Store and manage files in Amazon S3.', level: 'Beginner' },
    { name: 'Host a Static Website', desc: 'Deploy a static website using S3.', level: 'Intermediate' },
    { name: 'Create an RDS Database', desc: 'Launch and connect to a MySQL database.', level: 'Intermediate' },
    { name: 'Set up a Load Balancer', desc: 'Distribute traffic across multiple instances.', level: 'Intermediate' },
    { name: 'Configure Auto Scaling', desc: 'Automatically scale your application.', level: 'Advanced' },
    { name: 'Deploy a VPC', desc: 'Create a custom network environment.', level: 'Advanced' },
  ],
  azure: [
    { name: 'Deploy a Virtual Machine', desc: 'Create and configure a VM in Azure.', level: 'Beginner' },
    { name: 'Create a Storage Account', desc: 'Store blobs and files in Azure Storage.', level: 'Beginner' },
  ],
  docker: [
    { name: 'Build and Run a Container', desc: 'Package an app into a Docker container.', level: 'Beginner' },
    { name: 'Write a Dockerfile', desc: 'Define your own container image.', level: 'Beginner' },
  ],
  kubernetes: [
    { name: 'Deploy a Pod', desc: 'Run your first workload on Kubernetes.', level: 'Beginner' },
    { name: 'Create a Deployment', desc: 'Manage replicas and rolling updates.', level: 'Intermediate' },
  ],
}

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-600',
  Intermediate: 'bg-blue-50 text-blue-600',
  Advanced: 'bg-orange-50 text-orange-600',
}

function Practice() {
  const [activeTech, setActiveTech] = useState('aws')
  const navigate = useNavigate()

  const handleStartLab = (lab: { name: string; desc: string; level: string }) => {
    navigate('/lab', { state: { lab, tech: activeTech } })
  }

  return (
    <Layout>
      <div className="p-8">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 max-w-xl mb-6">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for labs, topics or technologies..."
            className="w-full outline-none text-sm text-gray-600"
          />
        </div>

        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100">
          <p className="text-xs font-semibold text-blue-600 tracking-wide mb-2">PRACTICE</p>
          <h1 className="text-3xl font-bold text-gray-900">
            Hands-on Labs for<br /><span className="text-blue-600">Real-World Skills</span>
          </h1>
          <p className="text-gray-500 mt-3">Choose a technology below and start practicing with designed real-world labs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {techs.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(tech.id)}
              className={`text-left bg-white rounded-xl p-4 border-2 transition-colors ${
                activeTech === tech.id ? tech.color : 'border-transparent'
              } hover:border-gray-200 shadow-sm`}
            >
              <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{tech.labs} Practical Labs</p>
              <p className="text-xs text-gray-400">Beginner to Advanced</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-50">
            <h2 className="text-lg font-bold text-gray-900 capitalize">{activeTech} Labs</h2>
            <p className="text-sm text-gray-400">Learn and practice with real {activeTech.toUpperCase()} environment</p>
          </div>
          <div className="flex flex-col">
            {(labsData[activeTech] || []).map((lab, i) => (
              <div
                key={lab.name}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm w-5">{i + 1}</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{lab.name}</p>
                    <p className="text-xs text-gray-400">{lab.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColor[lab.level]}`}>
                    {lab.level}
                  </span>
                  <button
                    onClick={() => handleStartLab(lab)}
                    className="flex items-center gap-1 bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-blue-700"
                  >
                    Start Lab <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Practice