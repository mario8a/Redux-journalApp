import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
   return (
      <>
        <h3 className="auth__title">Sign In</h3>

        <form action="">

         <input 
            type="text"
            placeholder="correo@gmail.com"
            name="email"
            className="auth__input"
            autoComplete="off"
         />
         <input 
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
         />

         <button
            type="submit"
            className="btn btn-primary btn-block"
         >
            Login
         </button>

         <div className="auth__social-networks">
            <p>- Or -</p>

            <div 
               className="google-btn"
            >
               <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
               </div>
               <p className="btn-text">
                  Sign in with google
               </p>
            </div>
         </div>

         <p className="txt-singup">
            Don't hace an account?
            <Link className="btn-signup link" to="/auth/register">
               Sign up
            </Link> 
         </p>

        </form>
      </>
   )
}
