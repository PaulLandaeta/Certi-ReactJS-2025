const ReportPage = ({ className, message, ...rest }) => {
  const styles = {
    text: "size:2",
  };
  return (
    <>
      <button
        className={`${styles.text} ${className}`} {...rest}
      >
        {message}
      </button>
    </>
  );
};

export default ReportPage;
