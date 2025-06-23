export const Card = ({ children }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          maxWidth: "800px",
          minWidth: "400px",
          borderRadius: "8px",
          minHeight: "200px",
          padding: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
};


const Title = ({children}) => {
    return (
        <>
            <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginTop: '5px',
                marginBottom: '5px'

            }}>
                {children}
            </div>
        </>
    )
}


const Content = ({children}) => {
    return (
        <>
            <div style={{
                fontSize: '12px',
                margin: '5px',
                minHeight: '150px'
            }}>
                {children}
            </div>
        </>
    )
}

const Footer = ({children}) => {
    return (
        <>
            <div style={{
                fontSize: '14px',
                marginTop: '5px',
                border: '1px solid #eee'
            }}>
                {children}
            </div>
        </>
    )
}

Card.Title = Title;
Card.Content = Content;
Card.Footer = Footer;

