import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AbouPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import LoginPage from "./pages/LoginPage";
import CounterPage from "./pages/CounterPage";

const routes = {
    posts: "/posts",
    login: "/login",
    about: "/about",
};

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path={routes.posts} element={<PostsPage />} />
                    <Route path="p/:postId" element={<SinglePostPage />} />
                    <Route path="counter" element={<CounterPage />} />

                    <Route path="*" element={<h4>Страница не найдена</h4>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
