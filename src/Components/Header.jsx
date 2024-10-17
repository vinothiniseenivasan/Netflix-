import React from 'react';

import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Header.css";
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Header = () =>{

    // Get the information from redux store by using useSelector
    const userInformation = useSelector((store)=> store.user);
    // console.log("userInformation" ,userInformation)

  const navigate = useNavigate();
    function handleSignOut()
    {

       signOut(auth).then(() => {
        // Sign-out successful.
        // navigate to login page
        navigate("/");
      }).catch((error) => {

        navigate("/error")
        // An error happened.
    });
    }


    return(
       <div className="z-10 absolute  w-screen  bg-gradient-to-b from-black flex justify-between items-center p-3 mr-7  " >   
          {/* netflix logo img */}
        <img 
        className="w-[15rem]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Headerimg" />



      
          {
          (userInformation && (
        
        <div className="flex items-center mr-12">
            {/* user account image $&&  signout btn */}
                
               
                {/* Dropdown */}
                <Dropdown >
                    {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" className=" flex items-center w-full"> */}
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown-toggle flex items-center " bsPrefix="custom-dropdown-toggle">
                    
                    <div className='flex items-center'>
                           <img
                          //  url of  dropdown head img => its contain manage user and tranfer account and  sign out from netflix
      
                           src="https://occ-0-8003-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                           className="w-7 h-7 cursor-pointer "
                           alt="user-account" />
      
                           <span className="ml-2">▼</span>
                     </div>

                     {/* <span className='flex'>
                     <img
                    //  url of  dropdown head img => its contain manage user and tranfer account and  sign out from netflix

                     src={userInformation !== null ? (userInformation?.photoURL) :("https://occ-0-8003-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229")}
                     className="w-7 h-7 cursor-pointer "

                   
                     alt="user-account" />
                     </span> */}
                  
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