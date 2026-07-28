import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
  const { navigate } = useAppContext()

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium mb-6">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {categories.map((category) => (
          <button
            type="button"
            key={category.path}
            onClick={() => {
              navigate(`/products/${category.path}`)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group rounded-3xl p-4 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: category.bgColor }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="w-full max-w-[140px] h-28 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <p className="mt-4 text-sm font-medium">{category.text}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories