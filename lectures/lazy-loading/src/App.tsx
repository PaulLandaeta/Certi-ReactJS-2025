import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "./components/ErrorComponent";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ReportPage = lazy(() => import("./pages/ReportPage"));

function App() {
  const goToDashboard = () => {
    console.log("Estoy aca en el Component App");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/report",
      element: (
        <ReportPage
          className="text-center"
          message="hacer Click aca"
          
          onClick={() => {
            goToDashboard();
          }}
        />
      ),
    },
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
