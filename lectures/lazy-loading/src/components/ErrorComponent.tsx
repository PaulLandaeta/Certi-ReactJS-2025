export const ErrorComponent = ({ className, message, ...rest }) => {
  return <button {...rest}>{message}</button>;
};
