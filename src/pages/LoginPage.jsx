import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const submitLogin = (e) => {
        e.preventDefault();
        // запрос на сервер
        navigate("/posts");
    };

    return (
        <div>
            <h3>LoginPage</h3>
            <form onSubmit={submitLogin}>
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Password" />
                <button type="submit">Вход</button>
            </form>
        </div>
    );
};
export default LoginPage;
