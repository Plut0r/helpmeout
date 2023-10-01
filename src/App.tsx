import { Route, Routes as MainRoute } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Store from "./pages/store";
import Video from "./pages/video";
import VideoRepository from "./pages/videoRepository";

function App() {
  return (
    <MainRoute>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/store" element={<Store />} />
      <Route path="video_repository" element={<VideoRepository />} />
      <Route path="video" element={<Video />} />
    </MainRoute>
  );
}

export default App;
