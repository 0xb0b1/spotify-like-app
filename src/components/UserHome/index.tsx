import playGreen from '../../assets/play-green.svg'
import { Recommendations } from '../Recommendations'

export const UserHome = () => {
  return (
    <div className='w-full px-4 h-home overflow-y-scroll no-scrollbar text-gray-50'>
      <section>
        <h2 className='mt-2 mb-2 font-semibold'>Recent activity</h2>
        <ul className='list-none flex flex-col lg:grid grid-cols-2 gap-2'>
          <li className='flex items-center relative bg-gray-800 p-5 rounded-3xl'>
            <img
              className='w-24 h-24 rounded-2xl'
              src='https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28%C3%A1lbum%29_-_Billie_Eilish.png'
              alt=''
            />
            <div className='flex-1 ml-4'>
              <a className='block text-gray-100 font-semibold hover:underline' href='/'>
                Billie Eilish
              </a>
              <p className='text-sm mt-2 nowrap overflow-hidden'>Happier Than Ever</p>
              <span className='inline-block mt-4 text-sm span-playlist font-semibold text-gray-300'>
                16 songs
              </span>
            </div>
            <button
              type='button'
              className='w-8 h-8 mt-12 flex items-center justify-center border-0 bg-gray-700 rounded-lg'
            >
              <img src={playGreen} alt='' />
            </button>
          </li>
          <li className='flex items-center relative bg-gray-800  p-5 rounded-3xl'>
            <img
              className='w-24 h-24 rounded-2xl'
              src='https://upload.wikimedia.org/wikipedia/pt/2/2f/Billie_Eilish_-_Don%27t_Smile_at_Me.png'
              alt=''
            />
            <div className='flex-1 ml-4'>
              <a className='block text-gray-100 font-semibold hover:underline' href='/'>
                Billie Eilish
              </a>
              <p className='text-sm mt-2 nowrap overflow-hidden'>Dont Smile at Me</p>
              <span className='inline-block mt-4 text-sm span-playlist font-semibold text-gray-300'>
                9 songs
              </span>
            </div>
            <button
              type='button'
              className='w-8 h-8 mt-12 flex items-center justify-center border-0 bg-gray-700 rounded-lg'
            >
              <img src={playGreen} alt='' />
            </button>
          </li>
        </ul>
      </section>

      <Recommendations />
    </div>
  )
}
