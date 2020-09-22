import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
   return (
      <>
        <h3 className="auth__title">Register</h3>

        <form action="">

        <input 
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            autoComplete="off"
         />

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

         <input 
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
         />

         <button
            type="submit"
            className="btn btn-primary btn-block mb-5"
         >
            Register
         </button>

         <p className="txt-singup">
            Do you hace account?
            <Link className="btn-signup link" to="/auth/login">
               Sign In
            </Link> 
         </p>

        </form>
      </>
   )
}
