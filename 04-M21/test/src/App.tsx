import "./App.css";

function App() {
  return (
    <>
      <section className="w-full mx-auto flex flex-col justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
        <section>0</section>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decrement
        </button>
      </section>
    </>
  );
}

export default App;
