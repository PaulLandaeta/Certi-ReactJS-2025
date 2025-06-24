import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Card } from "./components/CompoundComponent/Card";
import { CounterContainer } from "./components/containerPatron/CounterContainer";
import { carrer } from "./components/HOC/Carrer";
import { Profile } from "./components/HOC/Profile";
import { CounterRender } from "./components/RenderProps/CounterRender";
function App() {
  const ProfileWithCarrer = carrer(Profile);
  const [date, setDate] = useState(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:5010");

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);
  const sendMessage = () => {
    const messageObj = { message: input };
    socketRef.current.send(JSON.stringify(messageObj));
    setInput("");
  };

  return (
    <>
      {/* <CounterContainer />
      <Profile /> 
      <ProfileWithCarrer />
      <CounterRender /> */}
      <Card>
        <Card.Title>Reporte Mensual</Card.Title>
        <Card.Content>
          <div>Ganancia total</div>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            2000
          </div>
        </Card.Content>
        <Card.Footer>
          <div>Salir</div>
        </Card.Footer>
      </Card>
      <div>
        <h2>Mensajes (WebSocket)</h2>
        <ul>
          {messages.map((msg, i) => (
            <li key={i}>
              {msg.timestamp}: {msg.message}
            </li>
          ))}
        </ul>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </>
  );
}

export default App;
