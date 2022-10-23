import { useState } from 'react'
import Slider from 'rc-slider'

import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import next from '../../assets/play-next.svg'
import prev from '../../assets/play-previous.svg'
import playing from '../../assets/playing.svg'
import shuffle from '../../assets/shuffle.svg'
import repeat from '../../assets/repeat.svg'

import 'rc-slider/assets/index.css'

import { converDurationToTimeString } from '../../utils/convertDurationToTimeString'

export const ShowPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isShuffle, setIsShuffle] = useState(true)
  // const [isLooping, setisLooping] = useState(true)

  return (
    <div className='hidden lg:flex flex-col items-center justify-between px-4 py-4 h-home w-96 text-white bg-gradient-to-t from-gray-800'>
      <header className='flex items-center gap-2'>
        <img src={playing} alt='Playing Now' />
        <strong className='font-semibold'>Playing Now</strong>
      </header>

      {isPlaying ? (
        <div className='text-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28%C3%A1lbum%29_-_Billie_Eilish.png'
            alt=''
            className='rounded-3xl'
          />
          <strong className='block font-semibold mt-8 text-xl leading-7'> Happier Than Ever</strong>
          <span className='block mt-4 text-opacity-60 leading-6'>Billie Eilish</span>
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-80 rounded-3xl bg-gradient-to-r p-4 text-center'>
          <strong>Select a song</strong>
        </div>
      )}

      <footer>
        <div className='flex items-center gap-2 text-sm'>
          <span className='inline-flex px-2 text-center'>{converDurationToTimeString(120)}</span>
          <div className='flex-1'>
            {isPlaying ? (
              <Slider
                max={240}
                value={120}
                onChange={() => {}}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#323232' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              ></Slider>
            ) : (
              <div className='w-full h-1 bg-purple-300 '></div>
            )}
          </div>
          <span>{converDurationToTimeString(240)}</span>
        </div>

        <div className='flex items-center justify-center my-4 gap-4'>
          <button type='button' onClick={() => setIsShuffle(!isShuffle)}>
            <img src={shuffle} alt='Shuffle' />
          </button>
          <button type='button'>
            <img src={prev} alt='Previous' />
          </button>
          <button
            className='flex items-center justify-center bg-gray-700 w-12 h-12 rounded-xl'
            type='button'
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <img src={pause} alt='Play' /> : <img src={play} alt='Play' />}
          </button>
          <button type='button'>
            <img src={next} alt='Next' />
          </button>
          <button type='button'>
            <img src={repeat} alt='Repeat' />
          </button>
        </div>
      </footer>
    </div>
  )
}
