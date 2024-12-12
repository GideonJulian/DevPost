import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Layout from "./Layout/Layout";
import HomeLayout from "./Layout/HomeLayout";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
    
      element: <HomeLayout /> ,
      children : [
        {
          index: true ,
          element: <Home />
        },
        {
          path: "/:id",
          element: <PostDetails />,
        },
      ]
    },
    
  ]);

  return <RouterProvider router={route} />;
};

export default App;
