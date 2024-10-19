import React from 'react';

import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Header.css";
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { Netflix_DROPDOWN, NETFLIX_LOGOURL } from '../Utils/constant';




const Header = () =>{

    // dispatch an action on onAuthChanged
    const dispatch = useDispatch();

    // Get the information from redux store by using useSelector
    const userInformation = useSelector((store)=> store.user);
    // console.log("userInformation" ,userInformation)

  const navigate = useNavigate();
    function handleSignOut()
    {

       signOut(auth).then(() => {
        // Sign-out successful.
        // navigate to login page
        // navigate("/");
      }).catch((error) => {

        navigate("/error")
        // An error happened.
    });
    }



    // onAuthChanged in header page for to store in redux store and navigate to browse page and navigate to login page
    useEffect(()=>{

        // whenever signed in or signed out user we store information in redux store in root of our project hear app.js or body.js by use onAuthStateChanged prperty
    
      const unsubscribe =    onAuthStateChanged(auth, (user) => {
                   if (user) {
                     // User is signed in, see docs for a list of available properties and sign up
                     // https://firebase.google.com/docs/reference/js/auth.user
                     const {uid , displayName , email, photoURL} = user;
                    //  addUser dispatch an action
                     dispatch(addUser(
                        {
                            uid : uid ,
                            displayName : displayName,
                            email :email ,
                            photoURL :photoURL
    
                        }
                    ))
                    //  sign in success so navigate to browse page
                    navigate("/browse");
                   } 
                   else {
                     // User is signed out 
                    //  removeUSer
    
                     dispatch(removeUser());
                    //  signout navigate to login page
                    navigate("/");
                  
                   }
                  });

                //   for component unMount  its unsubscribe from browser
                return () =>  unsubscribe();
       } , [])
    
    


    return(
       <div className="z-[15] absolute  w-screen  bg-gradient-to-b from-blue-50 flex justify-between items-center p-3 mr-7 " >   
          {/* netflix logo img */}
        <img 
        className="w-[15rem]"
        src={NETFLIX_LOGOURL} alt="Headerimg" />



      
          {
            // if user is present show logo
          (userInformation && (
        
        <div className="flex items-center mr-12 ">
            {/* user account image $&&  signout btn */}
                
               
                {/* Dropdown */}
                <Dropdown >
                    {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" className=" flex items-center w-full"> */}
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown-toggle flex items-center " bsPrefix="custom-dropdown-toggle">
                    
                    <div className='flex items-center'>
                           <img
                          //  url of  dropdown head img => its contain manage user and tranfer account and  sign out from netflix
      
                           src={Netflix_DROPDOWN}
                           className="w-7 h-7 cursor-pointer"
                           alt="user-account" />
      
                           <span className="ml-2">▼</span>
                     </div>

                 
                  
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='p-3 m-2 bg-black'>
                        <span className='flex items-center'>
                            <img
                                src="https://occ-0-8003-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABebkcO417lVuILWpoX8Pu7U4OsmXF-KtFL-xTG8OS5OSwMWnOhHaRDsFyDvWgUv45-O-fRUMd1Ay-FH99lt2XfeGUx9MSQ0.png?r=f55"
                                alt="kid-img"
                                className="w-5 h-5 mr-2  bg-white"
                            />
                            <Dropdown.Item
                                href="#"
                                className='dropdown-item'>
                                Kids
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center mt-1'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3917/3917058.png"
                                className=' bg-white w-5 h-5 rounded mr-2'
                                alt='man-img'
                            />
                            <Dropdown.Item
                                href="#"
                                className='dropdown-item'>
                                Manage Profile
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center mt-1'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3917/3917058.png"
                                className=' bg-white w-5 h-5 rounded mr-2'
                                alt='man-img'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Manage Profile
                            </Dropdown.Item>
                        </span>
                        <span className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5069/5069162.png"
                                alt="img"
                                className=' bg-white w-5 h-5 rounded mr-2'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Transfer Profile
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
                                alt="img"
                                className=' bg-white w-5 h-5 rounded mr-2'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Account
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5068/5068703.png"
                                alt="img"
                                className=' bg-white w-5 h-5 rounded mr-2'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Help Center
                            </Dropdown.Item>
                        </span>

                        <Dropdown.Divider className='bg-white w-full' />
                        {/* when user sign out its should go to login page in order to sign up or sign in */}

                        <Dropdown.Item className="text-white"
                        onClick={handleSignOut}
                        >Sign Out Of Netflix</Dropdown.Item>

                        

                    </Dropdown.Menu>
                </Dropdown>


                


        </div>
        ))}
        
       
        


       </div>)
  
   
    
}


export default  Header;


 //    className="   w-[15rem] px-8 py-2 bg-gradient-to-b from-black m-6 bg-white  "