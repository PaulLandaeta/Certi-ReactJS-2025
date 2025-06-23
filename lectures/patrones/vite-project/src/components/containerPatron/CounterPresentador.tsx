export const CounterPresentador = ({ count, increment }) => {
  return (
    <>
      {count}
      <button onClick={increment}> Incrementar </button>
    </>
  );
};
