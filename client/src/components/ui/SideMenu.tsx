import React from 'react'

const SideMenu: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-4 min-h-screen">
      <nav>
        <ul className="space-y-3">
          <li>
            <a href="/feed" className="block hover:text-blue-500">
              Feed
            </a>
          </li>
          <li>
            <a href="/profile" className="block hover:text-blue-500">
              Profile
            </a>
          </li>
          <li>
            <a href="/admin" className="block hover:text-blue-500">
              Admin Panel
            </a>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </aside>
  )
}

export default SideMenu
