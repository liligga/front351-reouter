import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AbouPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />

          <Route path="*" element={<h4>Страница не найдена</h4>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
