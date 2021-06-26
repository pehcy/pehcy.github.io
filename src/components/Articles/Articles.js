import React from 'react'

const Articles = ({ children }) => {
  return (
    <>
      <main className="flex-grow">
        <div className="px-2 py-5 max-w-screen-md mx-auto">
          <article className="font-serif">{children}</article>
        </div>
      </main>
    </>
  )
}

export default Articles