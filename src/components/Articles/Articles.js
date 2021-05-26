import React from 'react'

const Articles = ({ children }) => (
  <main>
    <div className="px-2 py-5 max-w-screen-md mx-auto">
      <div>{ children }</div>
    </div>
  </main>
)

export default Articles