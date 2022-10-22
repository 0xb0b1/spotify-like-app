import { createContext, useState, ReactNode, useContext } from 'react'

type Song = {
  title: string
  artirst: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  playlist: Song[]
  currentSongIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  play: (song: Song) => void
  playList: (list: Song[], index: number) => void
  setPlayingState: (state: boolean) => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  playNext: () => void
  playPrevious: () => void
  clearPlayerState: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
  // const [playlist, setPlaylist] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  const play = (/* song: Song */) => {
    // setPlaylist([song]);
    setCurrentSongIndex(0)
    setIsPlaying(true)
  }

  const playList = (/* list: Song[], */ index: number) => {
    // setPlaylist(list);
    setCurrentSongIndex(index)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  const clearPlayerState = () => {
    // setPlayingState([]);
    setCurrentSongIndex(0)
  }

  const hasPrevious = currentSongIndex > 0
  const hasNext = isShuffling || currentSongIndex + 1 < playlist.length

  const playNext = () => {
    if (isShuffling) {
      const nextRandomSongIndex = Math.floor(Math.random() * playlist.length)

      setCurrentSongIndex(nextRandomSongIndex)
    } else if (hasNext) {
      setCurrentSongIndex(currentSongIndex + 1)
    }
  }

  const playPrevious = () => {
    if (hasPrevious) {
      setCurrentSongIndex(currentSongIndex - 1)
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        playlist,
        currentSongIndex,
        play,
        playList,
        playNext,
        playPrevious,
        isPlaying,
        isLooping,
        isShuffling,
        togglePlay,
        toggleLoop,
        setPlayingState,
        hasNext,
        hasPrevious,
        toggleShuffle,
        clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
