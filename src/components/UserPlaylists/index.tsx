import { HiOutlinePlus } from 'react-icons/hi'

export const UserPlaylists = () => {
  return (
    <div className='w-full px-4 text-gray-200 overflow-y-scroll no-scrollbar'>
      <header>
        <h2 className='mt-2 text-lg font-semibold'>My Playlists</h2>
      </header>
      <section className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4'>
        <div className='flex items-center justify-center h-68 w-68 bg-gray-800 rounded-xl hover:bg-gray-700'>
          <button type='button' className='flex flex-col items-center '>
            <HiOutlinePlus size={32} />
            <span className='text-lg font-semibold'>New Playlist</span>
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <img
            className='rounded-xl h-full w-full'
            src='https://cdn.playlists.net/images/playlists/image/medium/fcaf2e92e02d4180c525fe6935dd6108.jpg'
            alt='Summer Vibes'
          />
        </div>
        <div className='flex items-center justify-center'>
          <img
            className='rounded-xl h-full w-full'
            src='https://i.pinimg.com/originals/cb/ac/c3/cbacc3cd94470d4df50da4842ec5fe49.jpg'
            alt='Lofi'
          />
        </div>
        <div className='flex items-center justify-center'>
          <img
            className='rounded-xl h-full w-full'
            src='https://i.pinimg.com/originals/d3/b1/25/d3b1252338c0461134e34aa7f902552e.jpg'
            alt='Happy Hour'
          />
        </div>
      </section>
    </div>
  )
}
