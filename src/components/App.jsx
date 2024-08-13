import { useState } from "react";
import css from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={css.root}>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
