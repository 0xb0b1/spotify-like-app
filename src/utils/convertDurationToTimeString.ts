export const converDurationToTimeString = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor(duration % 3600) / 60
  const seconds = duration % 60

  const timeString = [minutes, seconds, hours]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':')

  return timeString
}
