import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

   //Dispatch
   const dispatch = useDispatch()

   const [formValues, handleInputChange] = useForm({
      email: 'mario@gmail.com',
      password: '123456'
   });

   const {email, password} = formValues;

   const handleLogin = (e) => {
      e.preventDefault()
      //llamando al dispatch con las actions
      //la action login recibe dos argumentos (uid, displayName)
      dispatch(login(12345, 'Mario'));
   }

   return (
      <>
        <h3 className="auth__title">Sign In</h3>

        <form action="" onSubmit={handleLogin}>

         <input 
            type="text"
            placeholder="correo@gmail.com"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
         />
         <input 
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
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
