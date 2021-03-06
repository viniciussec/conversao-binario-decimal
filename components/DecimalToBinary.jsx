import { useState } from "react";

const DecimalToBinary = () => {
  const [binario, setBinario] = useState(null);
  const [decimal, setDecimal] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    let dec = parseFloat(decimal);
    let bin = "0.";

    for (let i = 0; i < 50; i++) {
      dec *= 2;
      if (dec > 1) {
        dec -= 1;
        bin = bin + "1";
      } else if (dec < 1) {
        bin += "0";
      } else {
        bin += "1";
        break;
      }
    }

    setBinario(bin);
    console.log(bin);
  };

  const binarioChange = (event) => {
    setBinario(event.target.value);
  };

  const decimalChange = (event) => {
    setDecimal(event.target.value);
  };

  return (
      <form
        onSubmit={onSubmit}
        className="p-5 flex flex-col items-center"
      >
        <input
          value={decimal}
          onChange={decimalChange}
          placeholder="Decimal"
          className="form-input m-5 p-1"
          type="text"
        />
        <input
          value={binario}
          onChange={binarioChange}
          placeholder="Binário"
          className="form-input m-5 p-1"
          type="text"
        />
        <button className="p-3 bg-red-700 rounded text-white">Converter</button>
      </form>
  );
};

export default DecimalToBinary;
