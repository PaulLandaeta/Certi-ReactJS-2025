import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const goToReport = () => {
        navigate('/report');
    }
  return (
    <>
      <h1> Soy el Dashboard </h1>
      <button onClick={goToReport}>Ir a Report</button>
    </>
  );
};

export default Dashboard;