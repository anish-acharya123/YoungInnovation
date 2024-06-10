import React, { useState } from 'react'
import './Dropdown.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseover = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <button onClick={handleMouseover} className="dropdown-toggle">
        Resources ▾
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span className="icon">📄</span>
            <div>
              <h3>Blog</h3>
              <p>The latest industry news, updates and info.</p>
            </div>
          </div>
          <div className="dropdown-item">
            <span className="icon">⚡️</span>
            <div>
              <h3>Customer stories</h3>
              <p>Learn how our customers are making big changes.</p>
            </div>
          </div>
          <div className="dropdown-item">
            <span className="icon">🎥</span>
            <div>
              <h3>Video tutorials</h3>
              <p>Get up and running on new features and techniques.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
