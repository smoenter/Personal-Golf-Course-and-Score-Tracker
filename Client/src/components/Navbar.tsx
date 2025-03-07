 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
// State to track the Sign up status
// const [signUpCheck, setsignUpCheck] = useState(false);

// //Function to check if user signs up
// const checkSignUp = () => {
//   if(auth.signUp()) {
//     setsignUpCheck(true);
//   }
// };
//   // useEffect hook to run checksignUp() on component mount and when singUpCheck state changes
//   useEffect(() => {
//     checkSignUp();  // Call SignUp() function to update checksSignUp state
//   }, [signUpCheck]);  // Dependency array ensures useEffect runs when singUpCheck changes


  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  // Set loginCheck to true if user is logged in
    }
  };

  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin();  // Call checkLogin() function to update loginCheck state
  }, [loginCheck]);  // Dependency array ensures useEffect runs when loginCheck changes

  return (
    <div className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <div>
        {
          //
          // Conditional rendering based on signUpCheck state
          !signUpCheck ? (
            // Render signUp button if user is not sign up
            <button id="btn" type='button'>
              <Link to='/signUp' style={{color:'white'}}>Sign Up</Link>
            </button>
          ) : 
          !loginCheck ? (
            // Render login button if user is not logged in
            <button className="btn" type='button'>
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            // Render logout button if user is logged in
            <button className="btn" type='button' onClick={() => {
              auth.logout();  // Call logout() method from auth utility on button click
            }}>Logout</button>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
