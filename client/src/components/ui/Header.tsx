import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="text-xl font-bold">AnimalGram</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/feed" className="hover:text-blue-500">
              Feed
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-blue-500">
              Profile
            </a>
          </li>
          <li>
            <a href="/admin" className="hover:text-blue-500">
              Admin
            </a>
          </li>
          {/* Add login/logout buttons here if you want */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
