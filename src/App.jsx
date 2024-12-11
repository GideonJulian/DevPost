import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Layout from "./Layout/Layout";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      // index: true ,
      element: <Layout /> ,
      children : [
        {
          index: true, 
          element: <Home />
        },
        {
          path: "post/:id",
          element: <PostDetails />,
        },
      ]
    },
    
  ]);

  return <RouterProvider router={route} />;
};

export default App;
