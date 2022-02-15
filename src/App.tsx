import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/Header";
import { AllCategories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { MyPlaylists } from "./pages/MyPlaylists";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/playlists" element={<MyPlaylists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
