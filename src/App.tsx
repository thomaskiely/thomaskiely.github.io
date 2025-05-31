import { BackgroundBeams } from './components/Beams/Beams';
import "./App.css";
function App() {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      <BackgroundBeams className="opacity-50" />
      <main className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to my app!</h1>
      </main>
    </div>
  );
}

export default App;
