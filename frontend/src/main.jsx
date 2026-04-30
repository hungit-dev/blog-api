import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import { HomePage } from "./components/HomePage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import LogInPage from "./components/LogInPage.jsx";
import DashboardPage from "./components/DashboardPage.jsx";
import CreatePostPage from "./components/CreatePostPage.jsx";
import HomePostViewPage from "./components/HomePostViewPage.jsx";
import DashboardPostViewPage from "./components/DashboardPostViewPage.jsx";
import EditPostPage from "./components/EditPostPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <HomePostViewPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/posts",
        element: <DashboardPostViewPage />,
      },
      {
        path: "/dashboard/write",
        element: <CreatePostPage />,
      },
      {
        path: "/dashboard/posts/edit",
        element: <EditPostPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
