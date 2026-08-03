import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount:number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount:number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <section className="w-full mx-auto flex flex-col justify-center items-center space-y-6 pt-10">
        <h1 className="text-4xl font-bold">Counter With Redux</h1>
        <div className="w-9/12 flex flex-col justify-center items-center p-10 space-y-5">
          <button
            onClick={() => handleIncrement(5)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment By 5
          </button>
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => handleIncrement(1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Increment
            </button>
            <section>{count >= 1 && count <= 9 ? `0${count}` : count}</section>
            <button
              onClick={() => handleDecrement(1)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Decrement
            </button>
          </div>
          <button
              onClick={() => handleDecrement(5)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            > 
              Decrement By 5
            </button>
        </div>
      </section>
    </>
  );
}

export default App;
