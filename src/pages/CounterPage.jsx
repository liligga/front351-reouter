import { useSelector, useDispatch, connect } from "react-redux";

const CounterPage = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(
                    {type: "INCREMENT"}
                )}
            >+</button>
            {counter}
        </div>
    );
};
export default CounterPage;

// connect
// mapStateToProps
