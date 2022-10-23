import { ShowPlayer } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'
import { UserPlaylists } from '../../components/UserPlaylists'

export const MyPlaylists = () => {
  return (
    <div className='flex h-home bg-gray-900'>
      <Sidebar />
      <UserPlaylists />
      <ShowPlayer />
    </div>
  )
}
