import './App.css';
import Home from './Components/Home/Home/Home';
function App() {

  
  return (
    <div className="w-full min-h-screen bg-sky-200 pb-3">
      <h1 className=' font-bold lg:text-4xl text-center  pt-10 md:text-3xl sm:text-xl'>Search Your <span className="text-red-500"> Favourite</span> PokeMon</h1>
      <Home />
    </div>
  );
}

export default App;



