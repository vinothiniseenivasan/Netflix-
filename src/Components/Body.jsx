import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";


const Body = () =>{

    const dispatch = useDispatch();
    

   const appRouter = createBrowserRouter(
    [
        {
            path :"/",
            element: <Login />
        } ,
        {
            path :"/Browse",
            element: <Browse />
        }
    ]
   );


   useEffect(()=>{

    // whenever signed in or signed out user we store information in redux store by use onAuthStateChanged prperty

      onAuthStateChanged(auth, (user) => {
               if (user) {
                 // User is signed in, see docs for a list of available properties and sign up
                 // https://firebase.google.com/docs/reference/js/auth.user
                 const {uid , displayName , email} = user;
                //  addUser
                 dispatch(addUser(
                    {
                        uid : uid ,
                        displayName : displayName,
                        email :email 

                    }
                ))
              
               } 
               else {
                 // User is signed out 
                //  removeUSer

                 dispatch(removeUser());
              
               }
              });
   } , [])


    return(
        <div>
            <RouterProvider router={appRouter}> 
                Body
            </RouterProvider>
        </div>
    )
}


export default Body;