import { useState } from "react";

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberTotal, setNumberTotal] = useState(
    Number(numberOne) + Number(numberTwo)
  );

  return (
    <div className="App">
      <h1>İki Sayıyı Toplama</h1>

      <div className="number-inputs">
        <input
          onChange={(e) => setNumberOne(e.target.value)}
          value={numberOne}
          type="number"
          className="input is-large"
          placeholder="0"
        />
        <input
          onChange={(e) => setNumberTwo(e.target.value)}
          value={numberTwo}
          type="number"
          className="input is-large"
          placeholder="0"
        />
      </div>

      <button
        onClick={() => setNumberTotal(Number(numberOne) + Number(numberTwo))}
      >
        Topla!
      </button>
      <button
        onClick={() => setNumberTotal(Number(numberOne) - Number(numberTwo))}
      >
        Çıkart!
      </button>
      <button
        onClick={() => setNumberTotal(Number(numberOne) * Number(numberTwo))}
      >
        Çarp!
      </button>
      <button
        onClick={() => setNumberTotal(Number(numberOne) / Number(numberTwo))}
      >
        Böl!
      </button>

      <h2>{numberTotal}</h2>
    </div>
  );
}

export default App;
