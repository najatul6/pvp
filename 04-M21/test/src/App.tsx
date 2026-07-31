import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <section className="w-full mx-auto flex flex-col justify-center items-center space-y-6 pt-10">
        <h1 className="text-4xl font-bold">Counter With Redux</h1>
        <div className="w-9/12 flex justify-center items-center gap-6 p-10">
          <button onClick={handleIncrement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Increment
          </button>
          <section>0</section>
          <button onClick={handleDecrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Decrement
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
