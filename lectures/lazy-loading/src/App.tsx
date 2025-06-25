import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ReportPage = lazy(() => import("./pages/ReportPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/report",
      element: (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <ReportPage />
        </ErrorBoundary>
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
