import React from "react";
import { Provider } from "react-redux";
import store from "../ReduxStore/Store";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import WatchVideo from "./WatchVideo"


//read react-router-dom

const AppLayout = () => {
  return (
    <Provider store={store}>
        <div>
          <Header />
          <Outlet />
        </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children :[
      {
         path:"/",
         element:<Body></Body>
      },
      {
        path:"/watch",
        element:<WatchVideo/>
      }
    ]
  }
]);



export default AppLayout;
