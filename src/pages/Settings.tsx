import { User, Mail, Lock, Bell } from 'lucide-react'
import Layout from '../components/Layout'

function Settings() {
  return (
    <Layout>
      <div className="p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account preferences.</p>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm mt-6 divide-y divide-gray-50">
          <div className="p-5 flex items-center gap-4">
            <User size={18} className="text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Full Name</p>
              <p className="text-sm text-gray-400">Dhyey Patel</p>
            </div>
            <button className="text-sm text-blue-600 font-medium hover:underline">Edit</button>
          </div>

          <div className="p-5 flex items-center gap-4">
            <Mail size={18} className="text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Email</p>
              <p className="text-sm text-gray-400">dhyey@example.com</p>
            </div>
            <button className="text-sm text-blue-600 font-medium hover:underline">Edit</button>
          </div>

          <div className="p-5 flex items-center gap-4">
            <Lock size={18} className="text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Password</p>
              <p className="text-sm text-gray-400">••••••••</p>
            </div>
            <button className="text-sm text-blue-600 font-medium hover:underline">Change</button>
          </div>

          <div className="p-5 flex items-center gap-4">
            <Bell size={18} className="text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Notifications</p>
              <p className="text-sm text-gray-400">Email alerts for new labs and challenges</p>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Settings