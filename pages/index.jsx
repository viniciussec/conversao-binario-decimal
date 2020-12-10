import BinaryToDecimal from "../components/BinaryToDecimal";
import DecimalToBinary from "../components/DecimalToBinary";
import { useState } from "react";

export default function Home() {
  const [decimal, setDecimal] = useState(true);

  return (
    <div className="bg-gray-700 w-screen h-screen p-5 flex flex-col items-center">
      <h1 className="text-white p-5 text-2xl">Bem-vindo ao conversor</h1>
      <select
        name="options"
        id="options"
        className="select p-2"
        onChange={() => setDecimal(!decimal)}
      >
        <option value="decimal">Decimal para binário</option>
        <option value="binary">Binário para decimal</option>
      </select>

      {!decimal ? <BinaryToDecimal /> : <DecimalToBinary />}
    </div>
  );
}
