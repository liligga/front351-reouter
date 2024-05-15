import { useNavigate } from "react-router-dom";

const AbouPage = () => {
    const navigrate = useNavigate();
    return (
        <div>
            AbouPage
            <button onClick={() => navigrate(-1)}>Назад</button>
        </div>
    );
};
export default AbouPage;
