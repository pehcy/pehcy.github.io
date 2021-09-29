import React, { useState, useEffect } from 'react'

function getSectionIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }

    if (item.items) {
      acc.push(...getSectionIds(item.items))
    }
    return acc
  }, [])
}

function useActiveId(itemIDs) {
  const [isActive, setIsActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )

    itemIDs.forEach((id) => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      itemIDs.forEach((id) => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIDs])

  return isActive
}

function renderItems(itemList, activeId) {
  return (
    <ul className="font-normal text-sm font-serif text-gray-300 overflow-x-hidden">
      {
        itemList.map((item) => (
          <li key={item.url}>
            <a href={item.url} key={item.url}
              className={`block py-0 transform transition-colors
                hover:text-gray-700 ${activeId === item.url.slice(1) ? 'text-gray-700': ''
              }`}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId)}
          </li>
        ))
      }
    </ul>
  )
}

const Toc = ({ contents }) => {
  const idList = getSectionIds(contents.items)
  const activeId = useActiveId(idList)

  return (
    <aside className="hidden xl:text-sm xl:block flex-none block pl-4 mr-4 top-18">
      <div className="max-h-(screen-18) sticky top-0 justify-between block pt-20 pb-6">
        {renderItems(contents.items, activeId)}
      </div>
    </aside>
  )
}

export default Toc