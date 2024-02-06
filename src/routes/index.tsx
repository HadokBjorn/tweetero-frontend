import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Tweets from "../pages/tweets";
import TweetsByUser from "../pages/tweetsByUser";


export default function Routes() {
const router = createBrowserRouter([
    { 
        path: "/",
        element: <App/>,
        errorElement: <p>Ops! Essa página não existe! :( </p>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tweets",
                element: <Tweets />,
            },
            {
                path: "/tweets/account",
                element: <TweetsByUser />,
            },
        ],
    },
])

    return (
        <RouterProvider router={router}/>
    )
}
