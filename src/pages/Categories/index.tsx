import React from 'react'
import { Categories } from '../../components/Categories'
import { ShowPlayer } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'

export const AllCategories = () => {
  return (
    <div className='flex h-home bg-gray-900'>
      <Sidebar />
      <Categories />
      <ShowPlayer />
    </div>
  )
}
