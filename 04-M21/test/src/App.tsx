import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

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
          <Button
            onClick={() => handleIncrement(5)}
            variant="default"
          >
            Increment By 5
          </Button>
          <div className="flex justify-center items-center gap-6">
            <Button
              onClick={() => handleIncrement(1)}
              variant="default"
            >
              Increment
            </Button>
            <section>{count >= 1 && count <= 9 ? `0${count}` : count}</section>
            <Button
              onClick={() => handleDecrement(1)}
              variant="destructive"
            >
              Decrement
            </Button>
          </div>
          <Button
            onClick={() => handleDecrement(5)}
            variant="destructive"
          >
            Decrement By 5
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;
