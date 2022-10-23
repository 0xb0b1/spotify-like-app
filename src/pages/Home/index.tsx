import { useEffect, useState } from 'react'
import { ShowPlayer } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'
import { UserHome } from '../../components/UserHome'

export const Home = () => {
  return (
    <div className='flex h-home bg-gray-900'>
      <Sidebar />
      <UserHome />
      <ShowPlayer />
    </div>
  )
}
