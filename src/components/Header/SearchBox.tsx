import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchBox = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  // function handleSearch(ref) {
  //   console.log(ref)
  // }

  return (
    <>
      <label className='hidden md:flex flex-1 py-2 px-4 ml-20 max-w-min relative items-center text-gray-100 bg-gray-800 rounded-full'>
        <input
          className='px-4 mr-4 border-none rounded-2xl text-gray-50 bg-gray-800 placeholder-gray-400'
          type='text'
          placeholder='Search'
          ref={searchInputRef}
        />
        <RiSearchLine size={22} className='items-center' />
      </label>
    </>
  )
}
