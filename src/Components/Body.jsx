import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieCardInformation from "./MovieCardInformation";





const Body = () =>{

   const appRouter = createBrowserRouter(
    [
        {
            path :"/",
            element: <Login />
        } ,
        {
            path :"/Browse",
            element: <Browse />
        },
        {
            path :"/MovieInfo",
            element: <MovieCardInformation />
        }
    ]
   );


  
    return(
        <div>
            <RouterProvider router={appRouter}> 
                Body
            </RouterProvider>
        </div>
    )
}


export default Body;