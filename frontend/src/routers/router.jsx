import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx"
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Cart from "../pages/books/Cart.jsx"
import Checkoutpage from "../pages/books/Checkoutpage"
import SingleBook from "../pages/books/SingleBook.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/orders",
                element:<div>orders</div>
            },
            {
                path:"/about",
                element:<div>about</div>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/checkout",
                element:<Checkoutpage/>
            },
            {
                path:"/books/:id",
                element:<SingleBook/>
            }

        ]
    },
]) 
export default router  