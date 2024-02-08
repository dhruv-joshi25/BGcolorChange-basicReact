import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded">
          <button
            className="outline-none px-2 py-2 rounded text-black shadow-lg font-bold "
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-2 py-2 rounded text-black shadow-lg font-bold "
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            className="outline-none px-2 py-2 rounded text-black shadow-lg font-bold "
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            className="outline-none px-2 py-2 rounded text-black shadow-lg font-bold "
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            className="outline-none px-2 py-2 rounded text-black shadow-lg font-bold "
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            className="outline-none px-2 py-2 rounded text-black shadow-lg font-bold "
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
