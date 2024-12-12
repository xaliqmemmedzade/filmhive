import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Home from "../pages/home";
import Favorite from "../pages/favorite";
import List from "../pages/list";

 export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"favorite",
                element:<Favorite />
            },
            {
                path:"list",
                element: <List />
            }
        ]
    }
])