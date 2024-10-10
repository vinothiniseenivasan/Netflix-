import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../Utils/validate";

const Login = () =>{
   

     const [isSignIn , setIsSignIn] = useState(true);
     const [emailMessageFromValidate ,setEmailMessageFromValidate] = useState(" ");
    
     const [passwordFromValidate ,setPasswordFromValidate] = useState(" ");

     const [nameValidate ,setNameValidate] = useState(" ");
    

     const email =useRef(null);
     const password = useRef(null);
     const fullName = useRef(null);
     let message = null;

     function handleSignInPage()
     {
      console.log("handleSignInPage")

      setIsSignIn(!isSignIn);

     }

     function  signInButtonFormValidation()
     {
      // Form Validation for sign In 
      console.log("fullName"  , fullName)
      // email.current.value === whatever input user given in email field
      // fullName !== null

      if(isSignIn === true)
      {

        message = validateData(email.current.value , password.current.value , " " )
      }
      else
      {
        message = validateData(email.current.value , password.current.value , fullName.current.value )
      }
      

      console.log("message from validateData" , message);
      // message == null => user sucessfully enter email and password otherwise user enter wrong eamil and password
      // show that errormessage
      setEmailMessageFromValidate(message);
      setPasswordFromValidate(message);
      setNameValidate(message);
      console.log("nameValidate" ,nameValidate)

     }



  return (
    <div  className="relative h-screen">
         <Header />

         <div className="h-full absolute top-0 left-0 w-full">
            {/* background image */}
            <img 
            className="h-full w-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/AE-en-20240930-TRIFECTA-perspective_2b92276f-74d2-4979-8808-8c064a1c5ac2_large.jpg" alt="Logo" />
         </div>
        
        <form 
        onSubmit={(e)=>{
          e.preventDefault();
        }}
        className="absolute  bg-black top-1/4  left-[40%] bg-opacity-80 z-10 flex flex-col w-1/4 p-8  h-auto ">

            <div className="text-white font-serif  text-3xl tracking-wider p-2 mt-3">
            {  (isSignIn) ? "Sign In" :  "Sign Up"   }
            </div>
             
             
             {/* for signup form Full Name */}
            {
              (isSignIn === false) ? (
                <input
               type="text"
               ref = {fullName}
               placeholder="Full Name"
               className="m-2 p-3 mt-3 bg-gray-700 flex justify-center items-center text-white opacity-85"
             />) : " "

            }


             {/* display message according to user input in FULLNAME */}
             {
              (isSignIn === false) ? (
               
                      <p className="text-red-800 font-bold ml-2 text-xl">
                          {/* {console.log("message=>" ,  message)} */}
                          { ( nameValidate === "Name must be between 2 to 30 characters and contain only letters and spaces." )? "Name must be between 2 to 30 characters and contain only letters and spaces! " : " "}
                       </p>
                       )    : " " 
              }



            {/* email */}
            <input
              ref={email}
               type="text"
               placeholder="Email or Phone Number"
               className="m-2 p-3 mt-3 bg-gray-700 flex justify-center items-center text-white opacity-85"
             />
             
              {/* display message according to user input in email */}
             <p className="text-red-800 text-xl font-bold ml-2">
                 {console.log("message=>" ,  message)}
                { emailMessageFromValidate === "Please enter a valid email address !" ? "Please enter a valid email address !" : " "}
             </p>

             {/* password */}
             <input
               ref={password}
               type="password"
               placeholder="Password"
              className="m-2 p-3 mt-3 bg-gray-700 flex justify-center items-center text-white opacity-85"
             />

             {/* display message according to user input in password */}
            <p className="text-red-800 font-bold ml-2 text-xl">
                 {console.log("message=>" ,  message)}
                 { passwordFromValidate === "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character" ? "Password must be at least 8 characters!" : " "}
             </p>

             {/* sign in button */}
             <button 
               className="p-2 m-2  mt-6  bg-red-800 text-white flex items-center justify-center cursor-pointer"
               onClick={ ()=>{
                signInButtonFormValidation()
               }

               }>


             {  (isSignIn) ? "Sign In" :  "Sign Up"   }
             </button>

             <div className="flex justify-between">
                {/* tick and remember me */}
                <div className="flex justify-start  items-center  p-2">
                      <div className="">
                          <img 
                          className="w-4 h-4"
                          src="https://th.bing.com/th?id=OIP.Tg7fvFywT24QYfMQ2awZzgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="tick" />
                      </div>
                      <div className="text-white ml-1" >
                          Remember me
                      </div>
                </div>

                <div className="text-white p-2">
                    Any Help?
                </div>
                
             </div>



             {/* New to Netflix sign up now */}
             <div className="flex justify-start  items-center m-2 p-2 text-white mt-12">
                <div className="opacity-75">

                {  (isSignIn) ? " New to Netflix?" :  "Already a Member !"   }
                    
                </div>
                <div 
                        className="hover:cursor-pointer hover:underline ml-1"
                        onClick = {
                          ()=>{
                            handleSignInPage()
                          }
                         }
                >
                     {  (isSignIn) ? "Sign up now" :  "Sign In"   }
                </div>
             </div>

             {/* Protect by google */}

             <div className="text-white m-2 p-2">
             This page is protected by Google reCAPTCHA to ensure you're not a bot. 
             <span className="text-blue-700 ml-1 cursor-pointer hover:underline">
                  Learn more.
                </span>
             </div>

        </form>
       
    </div>
  )
}

export default Login;