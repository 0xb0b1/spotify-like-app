import { RiMusicFill } from 'react-icons/ri'

export const Logo = () => {
  return (
    <>
      <RiMusicFill size={32} />
      <p className='ml-2 md:text-2xl font-black'>
        Music Organizer
        <span className='ml-1 text-pink-500'>.</span>
      </p>
    </>
  )
}
