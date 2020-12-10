import { useState } from "react";

const BinaryToDecimal = () => {
  const [binario, setBinario] = useState(null);
  const [decimal, setDecimal] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const binarioChange = (event) => {
    setBinario(event.target.value);
  };

  const decimalChange = (event) => {
    setDecimal(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="p-5 flex flex-col items-center">
      <input
        value={binario}
        onChange={binarioChange}
        placeholder="Binário"
        className="form-input m-5 p-1"
        type="text"
      />
      <input
        value={decimal}
        onChange={decimalChange}
        placeholder="Decimal"
        className="form-input m-5 p-1"
        type="text"
      />
      <button className="p-3 bg-red-700 rounded text-white">Converter</button>
    </form>
  );
};

export default BinaryToDecimal;
