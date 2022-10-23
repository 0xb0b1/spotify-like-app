import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MyPlaylists } from './pages/MyPlaylists'

import { queryClient } from './services/queryClient'
import { Header } from './components/Header'
import { AllCategories } from './pages/Categories'
import { Home } from './pages/Home'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<AllCategories />} />
          <Route path='/playlists' element={<MyPlaylists />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
