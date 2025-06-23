export const carrer = (WrappedComponent: React.ComponentType) => {
  const Valor = () => {
    return (
      <>
        <div>
            carrera: 
        </div>
        <div>
            ISC
        </div>
        <WrappedComponent />
      </>
    );
  };
  return Valor;
};
