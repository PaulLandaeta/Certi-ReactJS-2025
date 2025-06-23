import "./App.css";
import { Card } from "./components/CompoundComponent/Card";
import { CounterContainer } from "./components/containerPatron/CounterContainer";
import { carrer } from "./components/HOC/Carrer";
import { Profile } from "./components/HOC/Profile";
import { CounterRender } from "./components/RenderProps/CounterRender";
function App() {
  const ProfileWithCarrer = carrer(Profile);

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
          <div>
            Salir
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default App;
