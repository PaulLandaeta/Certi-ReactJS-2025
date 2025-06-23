import { useState } from "react";

export const CounterSonOne = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const deccrement = () => setCount(count - 1);

  return <>{render(count, increment, deccrement)}</>;
};
