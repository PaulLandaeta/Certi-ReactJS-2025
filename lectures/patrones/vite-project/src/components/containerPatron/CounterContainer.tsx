import { useState } from "react";
import { CounterPresentador } from "./CounterPresentador";

export const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
  return <CounterPresentador count={count} increment={addOne} />;
};
