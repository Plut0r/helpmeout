import { Route, Routes as MainRoute } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Store from "./pages/store";
import VideoRepository from "./pages/videoRepository";
import VideoDetails from "./pages/videoDetails";
import RedirectPage from "./pages/redirectPage";

function App() {
  return (
    <MainRoute>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/store" element={<Store />} />
      <Route path="video_repository" element={<VideoRepository />} />
      <Route path="video_details" element={<VideoDetails />} />
      <Route path="video" element={<RedirectPage />} />
    </MainRoute>
  );
}

export default App;
