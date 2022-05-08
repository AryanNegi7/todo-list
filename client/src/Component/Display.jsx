import React from 'react'
import './Display.css'
const Display = () => {
  return (
    <div className='display'>
        <h3>Your Items</h3>
        <table>
          <thead>
            <th>Sno.</th>
            <th>Item title</th>
            <th>Description</th>
            <th>Actions</th>
          </thead>
          <tbody>

          </tbody>
        </table>
    </div>
  )
}

export default Display